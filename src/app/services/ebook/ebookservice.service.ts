import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Ebook } from 'src/app/models/ebook';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class EbookserviceService {

  ebookCollection: AngularFirestoreCollection<Ebook>;
  ebookDocument: AngularFirestoreDocument<Ebook>;

  constructor( private afs : AngularFirestore, private storage : AngularFireStorage) { 

    this.ebookCollection = this.afs.collection('ebook', ref => 
      ref.orderBy('uid','desc')
    ); 

  }

  getAllEbook(){
    return this.ebookCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Ebook
        const id = a.payload.doc.id
        return { id, ...data}
      })
    }));
  }

  getEbook(ebookUID:string){
    this.ebookDocument = this.afs.doc('/ebook/' + ebookUID)
    return this.ebookDocument.valueChanges()
  }

  createEbook(ebook:Ebook, ebookUID:string){
    this.afs.collection("ebook").doc(ebookUID).set(ebook)
  }

  deleteEbook(ebook:Ebook){
    this.afs.doc('/ebook/'+ ebook.uid).delete()

    this.storage.storage.refFromURL(ebook.imageURL).delete();
  }

  updateEbook(ebook:Ebook, ebookUID:string){
    return this.afs.collection("ebook").doc(ebookUID).update(ebook);
  }
}
