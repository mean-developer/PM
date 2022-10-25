import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgIdComponent } from './msg-id.component';

describe('MsgIdComponent', () => {
  let component: MsgIdComponent;
  let fixture: ComponentFixture<MsgIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
