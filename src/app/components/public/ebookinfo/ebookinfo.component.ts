import { Ebook } from './../../../models/ebook';
import { EbookserviceService } from './../../../services/ebook/ebookservice.service';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/internal/Subscription';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-ebookinfo',
  templateUrl: './ebookinfo.component.html',
  styleUrls: ['./ebookinfo.component.css']
})
export class EbookinfoComponent implements OnInit {

  ebooks: Observable<Ebook[]>;

  constructor(
    private ebookservice: EbookserviceService
  ) { }

  ngOnInit(): void {

    this.ebooks = this.ebookservice.getAllEbook()

  }

}
