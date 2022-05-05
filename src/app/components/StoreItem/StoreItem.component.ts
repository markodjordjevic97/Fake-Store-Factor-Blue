import { untilDestroyed } from 'ngx-take-until-destroy';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/shared/store/store.model';
import { StoresQuery } from 'src/app/shared/store/store.query';

@Component({
  selector: 'app-StoreItem',
  templateUrl: './StoreItem.component.html',
  styleUrls: ['./StoreItem.component.scss']
})
export class StoreItemComponent implements OnInit, OnDestroy {

  public store!: Store;

  constructor(private route: ActivatedRoute, private storesQuery: StoresQuery) { }

  ngOnInit() {
    this.getStore();
  }

  private getStore() {
    this.route.paramMap.pipe(untilDestroyed(this)).subscribe(param => {
      const id: string = param.get('id')!;
      this.store = this.storesQuery.getEntity(parseInt(id))!;
    })
  }

  ngOnDestroy(): void {}
}
