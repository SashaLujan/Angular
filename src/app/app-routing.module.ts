import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutBuhoComponent } from './about-buho/about-buho.component';
import { ArticulosBuhoComponent } from './articles-buho/articulos-buho.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'articulos',
    pathMatch: 'full',
  },
  {
    path: 'articulos',
    component: ArticulosBuhoComponent,
  },
  {
    path: 'about',
    component: AboutBuhoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }