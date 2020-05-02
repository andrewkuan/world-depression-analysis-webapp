import { CarouselserviceService } from './../../../services/carousel/carouselservice.service';
import { Carousel } from './../../../models/carousel';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeinfo',
  templateUrl: './homeinfo.component.html',
  styleUrls: ['./homeinfo.component.scss']
})
export class HomeinfoComponent implements OnInit {

  carousels: Observable<Carousel[]>

  constructor(private carouselservice: CarouselserviceService) { }

  ngOnInit(): void {
    this.carousels = this.carouselservice.getAllCarousel()
  }

}
