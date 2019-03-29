import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonLayoutComponent } from './lesson-layout.component';

describe('LessonLayoutComponent', () => {
  let component: LessonLayoutComponent;
  let fixture: ComponentFixture<LessonLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
