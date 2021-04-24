import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenNumDisplayComponent } from './even-num-display.component';

describe('EvenNumDisplayComponent', () => {
  let component: EvenNumDisplayComponent;
  let fixture: ComponentFixture<EvenNumDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenNumDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenNumDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
