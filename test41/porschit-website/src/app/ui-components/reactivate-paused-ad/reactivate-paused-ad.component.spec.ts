import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivatePausedAdComponent } from './reactivate-paused-ad.component';

describe('ReactivatePausedAdComponent', () => {
  let component: ReactivatePausedAdComponent;
  let fixture: ComponentFixture<ReactivatePausedAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivatePausedAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivatePausedAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
