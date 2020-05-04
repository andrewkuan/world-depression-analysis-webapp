import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerinfoComponent } from './disclaimerinfo.component';

describe('DisclaimerinfoComponent', () => {
  let component: DisclaimerinfoComponent;
  let fixture: ComponentFixture<DisclaimerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
