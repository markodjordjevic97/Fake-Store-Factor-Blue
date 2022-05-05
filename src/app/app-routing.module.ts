import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreItemComponent } from './components/StoreItem/StoreItem.component';
import { StoresListComponent } from './components/StoresList/StoresList.component';
import { StoresResolver } from './shared/resolvers/store.resolver';

const routes: Routes = [
  { path: 'stores', component: StoresListComponent, resolve: {stores: StoresResolver} },
  { path: 'stores/:id', component: StoreItemComponent },
  { path: '', redirectTo: 'stores', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
