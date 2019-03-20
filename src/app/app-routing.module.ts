import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path: 'cadastro', 
    component: RegisterComponent
  },
  {
    path: 'lista', 
    component: ProductsComponent
  },
  {
    path: 'edit/:id',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
