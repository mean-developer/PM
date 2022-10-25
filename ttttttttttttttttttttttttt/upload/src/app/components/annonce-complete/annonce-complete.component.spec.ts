import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceCompleteComponent } from './annonce-complete.component';

describe('AnnonceCompleteComponent', () => {
  let component: AnnonceCompleteComponent;
  let fixture: ComponentFixture<AnnonceCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
