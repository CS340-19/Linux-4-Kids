import { Component, OnInit } from '@angular/core';
import { LESSONS } from '../../assets/mock-lessons';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Lesson } from '../classes/lesson/lesson';

@Component({
  selector: 'app-read-only-lesson',
  templateUrl: './read-only-lesson.component.html',
  styleUrls: ['./read-only-lesson.component.scss']
})
export class ReadOnlyLessonComponent implements OnInit {
  lesson: Lesson;

  constructor(
  private route: ActivatedRoute,
  private router: Router,
) {}

ngOnInit() {
  this.lesson = LESSONS.find(((lesson) => lesson.id == this.route.paramMap.source.value.id));
  // this.hero$ = this.route.paramMap.pipe(
  // switchMap((params: ParamMap) =>
  // this.service.getHero(params.get('id')))
// );
}

}
