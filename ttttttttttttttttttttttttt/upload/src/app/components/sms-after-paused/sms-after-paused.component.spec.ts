import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsAfterPausedComponent } from './sms-after-paused.component';

describe('SmsAfterPausedComponent', () => {
  let component: SmsAfterPausedComponent;
  let fixture: ComponentFixture<SmsAfterPausedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsAfterPausedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsAfterPausedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
