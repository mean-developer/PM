import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSignupComponent } from './professional-signup.component';

describe('ProfessionalSignupComponent', () => {
  let component: ProfessionalSignupComponent;
  let fixture: ComponentFixture<ProfessionalSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
