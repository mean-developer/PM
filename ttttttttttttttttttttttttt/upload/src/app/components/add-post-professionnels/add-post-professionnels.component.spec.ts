import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostProfessionnelsComponent } from './add-post-professionnels.component';

describe('AddPostProfessionnelsComponent', () => {
  let component: AddPostProfessionnelsComponent;
  let fixture: ComponentFixture<AddPostProfessionnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostProfessionnelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostProfessionnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
