import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StoreService } from '../store/store.service';
import { StoresStore, StoresState } from '../store/store.store';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StoresResolver implements Resolve<StoresState> {
  constructor(
    private storeService: StoreService,
    private storesStore: StoresStore
  ) {}

  resolve(): Observable<StoresState | boolean> {
    if (this.storesStore.getValue().ids?.length) {
      return of(true);
    } else {
      return this.storeService.getStores().pipe(
        tap((reasponse: StoresState) => {
          this.storesStore.set(reasponse);
          console.log(this.storesStore.getValue());
        })
      );
    }
  }
}
