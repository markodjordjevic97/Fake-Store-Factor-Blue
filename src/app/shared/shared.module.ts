import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

// Components
import { StoresListComponent } from '../components/StoresList/StoresList.component';
import { StoreItemComponent } from '../components/StoreItem/StoreItem.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../components/Card/Card.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, NgxPaginationModule, RouterModule],
  declarations: [StoresListComponent, StoreItemComponent, CardComponent],
})
export class SharedModule {}
