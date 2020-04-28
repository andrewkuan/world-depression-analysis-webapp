import { BlogserviceService } from './../../../services/blog/blogservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Blog } from './../../../models/blog';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blog : Blog

  constructor(
    private route: ActivatedRoute,
    private blogservice: BlogserviceService
  ) { }

  ngOnInit(): void {
    this.getBlog()
    console.log(this)
  }

  getBlog(){
    const id = this.route.snapshot.paramMap.get('id')
    return this.blogservice.getBlog(id).subscribe( data => this.blog = data)
  }

}