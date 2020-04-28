import { Blog } from './../../models/blog';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class BlogserviceService {

  blogCollection: AngularFirestoreCollection<Blog>;
  blogDocument: AngularFirestoreDocument<Blog>;
  dataSource: MatTableDataSource<Blog>;

  constructor( private afs : AngularFirestore, private storage : AngularFireStorage) { 

    this.blogCollection = this.afs.collection('blog', ref => 
      ref.orderBy('timeStamp','desc')
    ); 

  }

  getAllBlog(){
    return this.blogCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Blog
        const id = a.payload.doc.id
        return { id, ...data}
      })
    }));
  }

  getBlog(blogUID:string){
    this.blogDocument = this.afs.doc('/blog/' + blogUID)
    return this.blogDocument.valueChanges()
  }

  createBlog(blog:Blog, blogUID:string){
    this.afs.collection("blog").doc(blogUID).set(blog)
  }

  deleteBlog(blog:Blog){
    this.afs.doc('/blog/'+ blog.uid).delete()

    this.storage.storage.refFromURL(blog.imageURL).delete();
  }

  updateBlog(blog:Blog, blogUID:string){
    return this.afs.collection("blog").doc(blogUID).update(blog);
  }

  filterCheck(query: string, blogDataSource: MatTableDataSource<Blog>){
    this.dataSource = blogDataSource;
    this.dataSource.filter = query.trim().toLowerCase();
    
    return this.dataSource.filteredData.length == 0 ? false : true;
  }

}
