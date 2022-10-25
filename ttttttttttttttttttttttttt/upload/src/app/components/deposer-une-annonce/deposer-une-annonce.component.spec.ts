import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposerUneAnnonceComponent } from './deposer-une-annonce.component';

describe('DeposerUneAnnonceComponent', () => {
  let component: DeposerUneAnnonceComponent;
  let fixture: ComponentFixture<DeposerUneAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeposerUneAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposerUneAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
