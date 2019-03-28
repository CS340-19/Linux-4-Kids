import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSelectComponent } from './lesson-select.component';

describe('LessonSelectComponent', () => {
  let component: LessonSelectComponent;
  let fixture: ComponentFixture<LessonSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
