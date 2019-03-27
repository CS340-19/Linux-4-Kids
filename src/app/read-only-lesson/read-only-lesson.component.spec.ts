import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyLessonComponent } from './read-only-lesson.component';

describe('ReadOnlyLessonComponent', () => {
  let component: ReadOnlyLessonComponent;
  let fixture: ComponentFixture<ReadOnlyLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
