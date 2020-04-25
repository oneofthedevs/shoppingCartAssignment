import { FormsModule } from '@angular/forms';
import { CrudServiceService } from './../shared/services/crud-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { ListComponent } from './dashboard/list/list.component';
import { DetailsComponent } from './dashboard/details/details.component';


@NgModule({
  declarations: [DashboardComponent, NavbarComponent, CartComponent, ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CrudServiceService]
})
export class HomeModule { }
