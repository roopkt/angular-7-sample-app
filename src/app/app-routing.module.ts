import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'products',
    loadChildren: '../app/products/products.module#ProductsModule'
  },

  {
    path: 'auth',
    loadChildren: '../app/auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false // <-- debugging purposes only
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
