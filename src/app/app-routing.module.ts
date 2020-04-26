import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminAuthGuard } from './shared/authGuard/admin-auth.guard';
import { OthersComponent } from './components/others/others.component';
import { AuthGuard } from './shared/authGuard/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'adminLogin',
    component: AdminLoginComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivateChild: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule),
    canActivateChild: [AdminAuthGuard]
  }
  ,
  {
    path: 'others',
    component: OthersComponent
  }
  , {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
