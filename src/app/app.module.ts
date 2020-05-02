import { SafePipe } from './../safepipe';
import { EbookserviceService } from './services/ebook/ebookservice.service';
import { CarouselserviceService } from './services/carousel/carouselservice.service';
import { BlogserviceService } from './services/blog/blogservice.service';

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

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AuthService } from './services/auth/auth.service';
import { UnauthComponent } from './components/public/unauth/unauth.component';
import { NewblogComponent } from './components/admin/newblog/newblog.component';
import { BlogcrudComponent } from './components/admin/blogcrud/blogcrud.component';
import { CarouselcrudComponent } from './components/admin/carouselcrud/carouselcrud.component';
import { EbookcrudComponent } from './components/admin/ebookcrud/ebookcrud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BlogDetailsComponent } from './components/public/blog-details/blog-details.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EbookinfoComponent } from './components/public/ebookinfo/ebookinfo.component';
import { ContactinfoComponent } from './components/public/contactinfo/contactinfo.component';


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
    EbookcrudComponent,
    BlogDetailsComponent,

    SafePipe,

    EbookinfoComponent,

    ContactinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    CommonModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatToolbarModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,

    CKEditorModule,
  ],
  providers: [
    AuthService,
    BlogserviceService,
    CarouselserviceService,
    EbookserviceService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
