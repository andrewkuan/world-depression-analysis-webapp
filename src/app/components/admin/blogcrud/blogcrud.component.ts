import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { BlogserviceService } from './../../../services/blog/blogservice.service';
import { Blog } from './../../../models/blog';

import { Subscription } from 'rxjs/internal/Subscription';
import {Observable} from 'rxjs/internal/Observable';


@Component({
  selector: 'app-blogcrud',
  templateUrl: './blogcrud.component.html',
  styleUrls: ['./blogcrud.component.css']
})

export class BlogcrudComponent implements OnInit {

  constructor(private blogService : BlogserviceService, private router: Router) {}

  blogs: Observable<Blog[]>;
  subscription: Subscription;
  showSpinner: boolean = true;
  itemExist = true;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.blogs = this.blogService.getAllBlog()
  }

  edit(blog:Blog){
    this.router.navigate(['/admin/blogcrud', blog.uid]);
  }

  delete(blog:Blog){
    if(confirm("Are you sure that you want to delete this?"))
      this.blogService.deleteBlog(blog);
  }

  filter(query:string){
  }

}
