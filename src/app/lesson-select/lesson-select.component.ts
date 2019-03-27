import { Component, Input } from '@angular/core';
import { LESSONS } from '../../assets/mock-lessons';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Lesson } from '../classes/lesson/lesson';
import { of } from 'rxjs';

@Component({
  selector: 'app-lesson-select',
  templateUrl: './lesson-select.component.html',
  styleUrls: ['./lesson-select.component.scss']
})
export class LessonSelectComponent{
  nestedLessons: Lesson[] = LESSONS;
  getChildren = (node: Lesson) => of(node.parts);
  nestedTreeControl = new NestedTreeControl(this.getChildren);
  hasChild(_: number, node: Lesson) {
      console.log(node);
      return node.parts != null && node.parts.length > 0;
    }
  constructor() {}
}
