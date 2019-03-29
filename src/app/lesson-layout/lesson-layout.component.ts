import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from '../classes/lesson/lesson';

@Component({
  selector: 'app-lesson-layout',
  templateUrl: './lesson-layout.component.html',
  styleUrls: ['./lesson-layout.component.scss']
})
export class LessonLayoutComponent implements OnInit {
  @Input() lessonParts: Lesson[];

  constructor() {

  }

  ngOnInit() {
  }

}
