import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalLessonComponent } from './terminal-lesson.component';

describe('TerminalLessonComponent', () => {
  let component: TerminalLessonComponent;
  let fixture: ComponentFixture<TerminalLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
