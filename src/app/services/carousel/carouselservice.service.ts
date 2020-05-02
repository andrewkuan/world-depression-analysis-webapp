import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Carousel } from 'src/app/models/carousel';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class CarouselserviceService {

  carouselCollection: AngularFirestoreCollection<Carousel>;
  carouselDocument: AngularFirestoreDocument<Carousel>;

  constructor( private afs : AngularFirestore, private storage : AngularFireStorage) { 

    this.carouselCollection = this.afs.collection('carousel', ref => 
      ref.orderBy('uid','desc')
    ); 

  }

  getAllCarousel(){
    return this.carouselCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Carousel
        const id = a.payload.doc.id
        return { id, ...data}
      })
    }));
  }

  getCarousel(carouselUID:string){
    this.carouselDocument = this.afs.doc('/carousel/' + carouselUID)
    return this.carouselDocument.valueChanges()
  }

  createCarousel(carousel:Carousel, carouselUID:string){
    this.afs.collection("carousel").doc(carouselUID).set(carousel)
  }

  deleteCarousel(carousel:Carousel){
    this.afs.doc('/carousel/'+ carousel.uid).delete()

    this.storage.storage.refFromURL(carousel.imageURL).delete();
  }

  updateCarousel(carousel:Carousel, carouselUID:string){
    return this.afs.collection("carousel").doc(carouselUID).update(carousel);
  }
}
