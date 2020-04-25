import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { HomeinfoComponent } from './components/public/homeinfo/homeinfo.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { AboutinfoComponent } from './components/public/aboutinfo/aboutinfo.component';
import { DonateinfoComponent } from './components/public/donateinfo/donateinfo.component';
import { AdminloginComponent } from './components/public/adminlogin/adminlogin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

import { AuthService } from './services/auth/auth.service';
import { UnauthComponent } from './components/public/unauth/unauth.component';
import { NewblogComponent } from './components/admin/newblog/newblog.component';
import { BlogcrudComponent } from './components/admin/blogcrud/blogcrud.component';
import { CarouselcrudComponent } from './components/admin/carouselcrud/carouselcrud.component';
import { EbookcrudComponent } from './components/admin/ebookcrud/ebookcrud.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeinfoComponent,
    BlogComponent,
    AboutinfoComponent,
    DonateinfoComponent,
    routingComponents,
    AdminloginComponent,
    DashboardComponent,
    UnauthComponent,
    NewblogComponent,
    BlogcrudComponent,
    CarouselcrudComponent,
    EbookcrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
