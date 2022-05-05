import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoresListComponent } from '../components/StoresList/StoresList.component';
import { StoreItemComponent } from '../components/StoreItem/StoreItem.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [StoresListComponent, StoreItemComponent]
})
export class SharedModule { }
