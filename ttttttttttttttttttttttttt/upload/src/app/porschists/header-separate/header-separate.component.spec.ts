import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSeparateComponent } from './header-separate.component';

describe('HeaderSeparateComponent', () => {
  let component: HeaderSeparateComponent;
  let fixture: ComponentFixture<HeaderSeparateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSeparateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSeparateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
