import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartMesAnnoncesComponent } from './part-mes-annonces.component';

describe('PartMesAnnoncesComponent', () => {
  let component: PartMesAnnoncesComponent;
  let fixture: ComponentFixture<PartMesAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartMesAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartMesAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
