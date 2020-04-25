import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateinfoComponent } from './donateinfo.component';

describe('DonateinfoComponent', () => {
  let component: DonateinfoComponent;
  let fixture: ComponentFixture<DonateinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
