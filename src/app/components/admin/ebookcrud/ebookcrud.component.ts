import { EbookserviceService } from './../../../services/ebook/ebookservice.service';
import { Ebook } from './../../../models/ebook';
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
  selector: 'app-ebookcrud',
  templateUrl: './ebookcrud.component.html',
  styleUrls: ['./ebookcrud.component.css']
})
export class EbookcrudComponent implements OnInit {

  selectedImage : any = null;
  ebookUID : string;
  ebooks :Observable<Ebook[]>;

  ebook: Ebook = {
    uid: null,
    timeStamp: null,
    title: null,
    author: null,
    imageURL: null,
    url: null,
    isPublic: null,
  }

  constructor(  private afs : AngularFirestore,
                @Inject(AngularFireStorage) private storage : AngularFireStorage,
                private ebookservice : EbookserviceService,
                private router : Router, 
                private route : ActivatedRoute,
    ) { }

  ngOnInit(): void {

    this.ebooks = this.ebookservice.getAllEbook()
    }

  @ViewChild('newebook',  {static: false}) form: NgForm;

  save(ebook: Ebook){

    const fileRef = this.storage.ref('ebook_images/'+ this.ebookUID);

    if(this.selectedImage!=null){
      this.storage.upload('ebook_images/'+ this.ebookUID, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            ebook.imageURL = url;
            this.ebookservice.updateEbook(ebook, this.ebookUID);
          })
        })
        ).subscribe();
    }else{
      this.ebookservice.updateEbook(ebook, this.ebookUID);
    }

    this.selectedImage=null;

    // this.clearField(); 
    this.router.navigate(['/admin/ebookcrud']);
  }

  create(ebook: Ebook){
    
    var newdoc = this.afs.collection('ebook').ref.doc()
    const fileRef = this.storage.ref('ebook_images/'+ newdoc.id);

    if(this.selectedImage!=null){
      this.storage.upload('ebook_images/'+ newdoc.id, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            ebook.imageURL = url;
            this.ebookservice.createEbook({
              uid: newdoc.id,
              timeStamp: firebase.firestore.Timestamp.now(),
              title: ebook.title,
              author: ebook.author,
              imageURL: ebook.imageURL,
              url: ebook.url,
              isPublic: ebook.isPublic
            },newdoc.id);
          })
        })
        ).subscribe();
    }else{
      this.ebookservice.createEbook({
        uid: newdoc.id,
        timeStamp: firebase.firestore.Timestamp.now(),
        title: ebook.title,
        author: ebook.author,
        imageURL: ebook.imageURL,
        url: ebook.url,
        isPublic: ebook.isPublic
      },newdoc.id);
    }

    this.selectedImage=null;

    // this.clearField(); 
    this.router.navigate(['/admin/ebookcrud']);
  }

  delete(ebook:Ebook){
    if(confirm("Are you sure that you want to delete this?"))
      this.ebookservice.deleteEbook(ebook);
  }

  edit(ebook:Ebook){
    this.ebookUID = ebook.uid

    if(this.ebookUID){
      this.ebookservice.getEbook(this.ebookUID).pipe(take(1)).subscribe((ebook:Ebook) => this.ebook = ebook)
    };


  }

  //reset form function
  onClear(){
    this.form.reset();
  }

  cancel(){
    this.router.navigate(['/admin/ebookcrud']);
  }

  showPreview(event: any){
    if(event.target.files && event.target.files[0]){
      this.selectedImage = event.target.files[0];
    }
    else{
    }
  }

}
