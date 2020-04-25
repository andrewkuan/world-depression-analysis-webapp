import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookcrudComponent } from './ebookcrud.component';

describe('EbookcrudComponent', () => {
  let component: EbookcrudComponent;
  let fixture: ComponentFixture<EbookcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
