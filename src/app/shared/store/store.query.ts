import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { StoresState, StoresStore } from './store.store';

@Injectable({providedIn: 'root'})
export class StoresQuery extends QueryEntity<StoresState> {
  constructor(protected store: StoresStore) {
    super(store);
  }
}
