import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartMesAnnoncesProfessionnelsComponent } from './part-mes-annonces-professionnels.component';

describe('PartMesAnnoncesProfessionnelsComponent', () => {
  let component: PartMesAnnoncesProfessionnelsComponent;
  let fixture: ComponentFixture<PartMesAnnoncesProfessionnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartMesAnnoncesProfessionnelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartMesAnnoncesProfessionnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
