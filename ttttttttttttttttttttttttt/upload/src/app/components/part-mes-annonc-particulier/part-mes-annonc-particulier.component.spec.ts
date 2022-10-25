import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartMesAnnoncParticulierComponent } from './part-mes-annonc-particulier.component';

describe('PartMesAnnoncParticulierComponent', () => {
  let component: PartMesAnnoncParticulierComponent;
  let fixture: ComponentFixture<PartMesAnnoncParticulierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartMesAnnoncParticulierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartMesAnnoncParticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
