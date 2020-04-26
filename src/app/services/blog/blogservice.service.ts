import { Blog } from './../../models/blog';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class BlogserviceService {

  blogCollection: AngularFirestoreCollection<Blog>;
  blog$: Observable<Blog[]>;
  dataSource: MatTableDataSource<Blog>;

  constructor( private afs : AngularFirestore, private storage : AngularFireStorage) { 

    this.blogCollection = this.afs.collection('Blog', ref => ref.where('isApproved', '==', true)); 
    this.blog$ = this.blogCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a =>{
        const data = a.payload.doc.data() as Blog;
        data.uid= a.payload.doc.id;
        return data;
      })
    }));

  }

  getAllBlog(){
    return this.blog$;
  }

  getBlog(blogUID:string){
    return this.afs.doc('/Blog/'+ blogUID).valueChanges();
  }

  createBlog(blog:Blog){
    this.blogCollection.add(blog)
  }

  deleteBlog(blog:Blog){
    this.afs.doc('/Blog/'+ blog.uid).delete()

    this.storage.storage.refFromURL(blog.imageURL).delete();
  }

  updateBlog(blog:Blog, blogUID:string){
    return this.afs.doc('/BLog/'+ blogUID).update(blog);
  }

  filterCheck(query: string, blogDataSource: MatTableDataSource<Blog>){
    this.dataSource = blogDataSource;
    this.dataSource.filter = query.trim().toLowerCase();
    
    return this.dataSource.filteredData.length == 0 ? false : true;
  }

}
