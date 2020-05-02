import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookinfoComponent } from './ebookinfo.component';

describe('EbookinfoComponent', () => {
  let component: EbookinfoComponent;
  let fixture: ComponentFixture<EbookinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
