import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsDoneComponent } from './its-done.component';

describe('ItsDoneComponent', () => {
  let component: ItsDoneComponent;
  let fixture: ComponentFixture<ItsDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItsDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
