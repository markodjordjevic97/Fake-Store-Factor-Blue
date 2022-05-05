import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';


// Components
import { StoresListComponent } from '../components/StoresList/StoresList.component';
import { StoreItemComponent } from '../components/StoreItem/StoreItem.component';
import { CardComponent } from '../components/Card/Card.component';
// Store
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from 'src/environments/environment';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AngularSvgIconModule.forRoot()
  ],
  declarations: [StoresListComponent, StoreItemComponent, CardComponent],
})
export class SharedModule {}
