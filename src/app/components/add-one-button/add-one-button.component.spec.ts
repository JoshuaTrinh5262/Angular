import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOneButtonComponent } from './add-one-button.component';

describe('AddOneButtonComponent', () => {
  let component: AddOneButtonComponent;
  let fixture: ComponentFixture<AddOneButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOneButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
