import { DomSanitizer } from '@angular/platform-browser';
import { BlogserviceService } from './../../../services/blog/blogservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Blog } from './../../../models/blog';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blog : Blog;
  Editor = ClassicEditor;


  constructor(
    private route: ActivatedRoute,
    private blogservice: BlogserviceService,
    private sanitizer : DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getBlog()
    console.log(this)
  }

  getBlog(){
    const id = this.route.snapshot.paramMap.get('id')
    return this.blogservice.getBlog(id).subscribe( data => this.blog = data)
  }

  sendUrl(playerUrl) {
    // this.iframeURL = playerUrl // try it first, if it doesn't work use the sanitized URL
    return this.sanitizer.bypassSecurityTrustResourceUrl(playerUrl);
}

}
