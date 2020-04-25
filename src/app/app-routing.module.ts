import { InnerPageGuardService } from './services/auth/inner-page-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnauthComponent } from './components/public/unauth/unauth.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminloginComponent } from './components/public/adminlogin/adminlogin.component';
import { DonateinfoComponent } from './components/public/donateinfo/donateinfo.component';
import { AboutinfoComponent } from './components/public/aboutinfo/aboutinfo.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { HomeinfoComponent } from './components/public/homeinfo/homeinfo.component';

import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [

  { path: '', redirectTo: '/unauth', pathMatch: 'full'},
  { path: 'home', component : HomeinfoComponent},
  { path: 'blog', component : BlogComponent},
  { path: 'about', component : AboutinfoComponent},
  { path: 'donate', component : DonateinfoComponent},
  { path: 'adminlogin', component : AdminloginComponent, canActivate: [InnerPageGuardService]},
  { path: 'dashboard', component : DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'unauth', component : UnauthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [

  HomeinfoComponent,

  BlogComponent
  ];
