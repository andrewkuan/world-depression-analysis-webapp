import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { BlogserviceService } from './../../../services/blog/blogservice.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';

import { take } from 'rxjs/internal/operators/take';
import { finalize } from "rxjs/operators";

import { Blog } from './../../../models/blog';


@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css']
})
export class NewblogComponent implements OnInit {

  imgSrc : string =  null
  selectedImage : any = null
  blogUID : string;

  blog: Blog = {
    uid : null,
    timeStamp : null,
    title : null,
    category : null,
    author : null,
    content : null,
    imageURL : null
  }

  constructor(
    private blogservice : BlogserviceService, 
    private router : Router, 
    private route : ActivatedRoute, 
    @Inject(AngularFireStorage) private storage: AngularFireStorage,
    private afs: AngularFirestore
    ) {
      
    }

  ngOnInit(): void {
    this.blogUID = this.route.snapshot.paramMap.get('id');
      if(this.blogUID){
        this.blogservice.getBlog(this.blogUID).pipe(take(1)).subscribe((blog:Blog) => this.blog = blog)
      };
  }

  @ViewChild('newblog',  {static: false}) form: NgForm;

  save(blog: Blog){
  
    const fileRef = this.storage.ref('blog_images/'+ this.blogUID);

    if(this.selectedImage!=null){
      this.storage.upload('blog_images/'+ this.blogUID, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            blog.imageURL = url;
            this.blogservice.updateBlog(blog, this.blogUID);
          })
        })
        ).subscribe();
    }else{
      this.blogservice.updateBlog(blog, this.blogUID);
    }

    // this.clearField(); 
    this.router.navigate(['/admin/blogcrud']);
  }

  create(blog: Blog){
    
    var newdoc = this.afs.collection('blog').ref.doc()
    const fileRef = this.storage.ref('blog_images/'+ newdoc.id);
    const data = {
      uid : newdoc.id,
      timeStamp : firebase.firestore.Timestamp.now(),
      title : blog.title,
      category : blog.category,
      author : blog.author,
      content : blog.content,
      imageURL : blog.imageURL
    }

    if(this.selectedImage!=null){
      this.storage.upload('blog_images/'+ newdoc.id, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            blog.imageURL = url;
            this.blogservice.createBlog(data,newdoc.id);
          })
        })
        ).subscribe();
    }else{
      this.blogservice.createBlog(data,newdoc.id);
    }

    // this.clearField(); 
    this.router.navigate(['/admin/blogcrud']);
  }

  //reset form function
  onClear(){
    this.form.reset();
  }

  showPreview(event: any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else{

      if(this.blog.imageURL){
        this.imgSrc = this.blog.imageURL;
        this.selectedImage = true;
        this.blog.imageURL = this.blog.imageURL
      }
      else{
        this.imgSrc = '/assets/images/Default_Uploader_Pic.png';
        this.selectedImage = false;
      }
    }
  }

  DefaultPreview(){
    if(this.selectedImage){

    }
    else{
      if(this.blog.imageURL){
        this.imgSrc = this.blog.imageURL;
      }
      else{
        this.imgSrc = '/assets/images/Default_Uploader_Pic.png';
      }
    }

    return this.imgSrc;
  }
}
  