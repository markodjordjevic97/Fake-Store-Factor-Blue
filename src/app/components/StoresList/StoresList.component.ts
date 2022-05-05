import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatePipeArgs } from 'ngx-pagination/dist/paginate.pipe';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { map } from 'rxjs/operators';
import { Store } from 'src/app/shared/store/store.model';
import { StoresQuery } from 'src/app/shared/store/store.query';

@Component({
  selector: 'app-StoresList',
  templateUrl: './StoresList.component.html',
  styleUrls: ['./StoresList.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StoresListComponent implements OnInit, OnDestroy {
  public stores!: any[];
  private originalStoresList!: any[];

  public cartAmount: number = 0;

  public tableHeader: string[] = [
    'Id',
    'Title',
    'Price',
    'Category',
    'Image',
    'Rating',
    'Cart',
  ];
  public configPagination: PaginatePipeArgs = {
    currentPage: 1,
    itemsPerPage: 5,
  };

  constructor(
    private storesQuery: StoresQuery,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getStores();
    this.changePaginationPages();
  }

  private getStores() {
    this.stores = this.storesQuery
      .getAll()
      .map((item) => ({
        ...item,
        addToCart: 'Add',
        removeFromCart: 'Delete',
        isAddedToCart: false,
      }));
    this.originalStoresList = this.stores;
  }

  public search(event: any) {
    if (event.target.value) {
      this.stores = this.originalStoresList.filter((item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
    } else {
      this.stores = this.originalStoresList;
    }
  }

  private changePaginationPages() {
    this.route.queryParamMap
      .pipe(
        map((params) => params.get('page')),
        untilDestroyed(this)
      )
      .subscribe((page) => {
        if (page) {
          this.configPagination.currentPage = page;
        }
      });
  }

  public pageChange(newPage: number) {
    this.router.navigate([''], { queryParams: { page: newPage } });
  }

  public addToCart(store: any) {
    store.isAddedToCart = !store.isAddedToCart;
    if(store.isAddedToCart) {
      this.cartAmount += store.price
    }
    else {
      this.cartAmount -= store.price
    }
  }

  public identity(index: number, store: Store) {
    return store.id;
  }

  ngOnDestroy(): void {}
}
