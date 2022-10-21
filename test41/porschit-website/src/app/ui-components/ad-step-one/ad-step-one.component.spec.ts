import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStepOneComponent } from './ad-step-one.component';

describe('AdStepOneComponent', () => {
  let component: AdStepOneComponent;
  let fixture: ComponentFixture<AdStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
