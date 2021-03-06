import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsComponent } from './oops.component';

describe('OopsComponent', () => {
  let component: OopsComponent;
  let fixture: ComponentFixture<OopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OopsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
