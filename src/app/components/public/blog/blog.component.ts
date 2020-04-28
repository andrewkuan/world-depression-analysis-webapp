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
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private blogService : BlogserviceService, private router: Router) { }

  blogs: Observable<Blog[]>;
  subscription: Subscription;
  blogDataSource : MatTableDataSource<Blog>;
  showSpinner: boolean = true;
  itemExist = true;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {

    this.blogs = this.blogService.getAllBlog()

  }

  filter(query:string){
  //filter from jobService
    this.itemExist = this.blogService.filterCheck(query,this.blogDataSource);
  }


}
