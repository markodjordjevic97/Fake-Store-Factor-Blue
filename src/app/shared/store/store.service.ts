import { StoresState } from './store.store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

constructor(private http: HttpClient) { }

public getStores(): Observable<StoresState> {
  return this.http.get<StoresState>('https://fakestoreapi.com/products');
}

}
