import { InnerPageGuardService } from './services/auth/inner-page-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnauthComponent } from './components/public/unauth/unauth.component';
import { DonateinfoComponent } from './components/public/donateinfo/donateinfo.component';
import { AboutinfoComponent } from './components/public/aboutinfo/aboutinfo.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { HomeinfoComponent } from './components/public/homeinfo/homeinfo.component';


import { AdminloginComponent } from './components/public/adminlogin/adminlogin.component';

import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { EbookcrudComponent } from './components/admin/ebookcrud/ebookcrud.component';
import { CarouselcrudComponent } from './components/admin/carouselcrud/carouselcrud.component';
import { BlogcrudComponent } from './components/admin/blogcrud/blogcrud.component';

import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [

  { path: '', redirectTo: '/unauth', pathMatch: 'full'},
  { path: 'home', component : HomeinfoComponent},
  { path: 'blog', component : BlogComponent},
  { path: 'about', component : AboutinfoComponent},
  { path: 'donate', component : DonateinfoComponent},
  { path: 'unauth', component : UnauthComponent},
  
  { path: 'adminlogin', component : AdminloginComponent, canActivate: [InnerPageGuardService]},

  { path: 'admin/dashboard', component : DashboardComponent, canActivate: [AuthGuardService]},

  { path: 'admin/blogcrud/new', component : BlogcrudComponent, canActivate: [AuthGuardService]},
  { path: 'admin/blogcrud/:id', component : BlogcrudComponent, canActivate: [AuthGuardService]},
  { path: 'admin/blogcrud', component : BlogcrudComponent, canActivate: [AuthGuardService]},

  { path: 'admin/carouselcrud', component : CarouselcrudComponent, canActivate: [AuthGuardService]},
  { path: 'admin/ebookcrud', component : EbookcrudComponent, canActivate: [AuthGuardService]},
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
