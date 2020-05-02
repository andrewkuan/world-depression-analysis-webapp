import { CarouselserviceService } from './../../../services/carousel/carouselservice.service';
import { Carousel } from './../../../models/carousel';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';

import { take } from 'rxjs/internal/operators/take';
import { finalize } from "rxjs/operators";
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-carouselcrud',
  templateUrl: './carouselcrud.component.html',
  styleUrls: ['./carouselcrud.component.css']
})
export class CarouselcrudComponent implements OnInit {

  selectedImage : any = null;
  carouselUID : string;
  carousels :Observable<Carousel[]>;

  carousel: Carousel = {
    uid : null,
    imageURL : null,
    url : null,
    isPublic : null,
  }

  constructor(  private afs : AngularFirestore,
                @Inject(AngularFireStorage) private storage : AngularFireStorage,
                private carouselservice : CarouselserviceService,
                private router : Router, 
                private route : ActivatedRoute,
    ) { }

  ngOnInit(): void {

    this.carousels = this.carouselservice.getAllCarousel()
    }

  @ViewChild('newcarousel',  {static: false}) form: NgForm;

  save(carousel: Carousel){

    const fileRef = this.storage.ref('carousel_images/'+ this.carouselUID);

    if(this.selectedImage!=null){
      this.storage.upload('carousel_images/'+ this.carouselUID, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            carousel.imageURL = url;
            this.carouselservice.updateCarousel(carousel, this.carouselUID);
          })
        })
        ).subscribe();
    }else{
      this.carouselservice.updateCarousel(carousel, this.carouselUID);
    }

    this.selectedImage=null;

    // this.clearField(); 
    this.router.navigate(['/admin/carouselcrud']);
  }

  create(carousel: Carousel){
    
    var newdoc = this.afs.collection('carousel').ref.doc()
    const fileRef = this.storage.ref('carousel_images/'+ newdoc.id);

    if(this.selectedImage!=null){
      this.storage.upload('carousel_images/'+ newdoc.id, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            carousel.imageURL = url;
            this.carouselservice.createCarousel({
              uid : newdoc.id,
              imageURL : carousel.imageURL,
              url : carousel.url,
              isPublic : carousel.isPublic,
            },newdoc.id);
          })
        })
        ).subscribe();
    }else{
      this.carouselservice.createCarousel({
        uid : newdoc.id,
        imageURL : carousel.imageURL,
        url : carousel.url,
        isPublic : carousel.isPublic,
      },newdoc.id);
    }

    this.selectedImage=null;

    // this.clearField(); 
    this.router.navigate(['/admin/carouselcrud']);
  }

  delete(carousel:Carousel){
    if(confirm("Are you sure that you want to delete this?"))
      this.carouselservice.deleteCarousel(carousel);
  }

  edit(carousel:Carousel){
    this.carouselUID = carousel.uid

    if(this.carouselUID){
      this.carouselservice.getCarousel(this.carouselUID).pipe(take(1)).subscribe((carousel:Carousel) => this.carousel = carousel)
    };


  }

  //reset form function
  onClear(){
    this.form.reset();
  }

  cancel(){
    this.router.navigate(['/admin/carouselcrud']);
  }

  showPreview(event: any){
    if(event.target.files && event.target.files[0]){
      this.selectedImage = event.target.files[0];
    }
    else{
    }
  }

}
