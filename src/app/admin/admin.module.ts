import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminServiceService } from './services/admin-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [MainComponent, NavbarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AdminServiceService
  ]
})
export class AdminModule { }
