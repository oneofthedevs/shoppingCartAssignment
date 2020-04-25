import { CartComponent } from './dashboard/cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './dashboard/list/list.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ]
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
