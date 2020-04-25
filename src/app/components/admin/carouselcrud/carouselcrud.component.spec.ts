import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselcrudComponent } from './carouselcrud.component';

describe('CarouselcrudComponent', () => {
  let component: CarouselcrudComponent;
  let fixture: ComponentFixture<CarouselcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
