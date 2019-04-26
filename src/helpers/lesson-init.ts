import { Injectable } from '@angular/core';
import { parseMd } from './markdown-parser.js';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../app/classes/lesson/lesson';
import { LessonsService } from '../app/lessons.service';

@Injectable({
  providedIn: 'root'
})
export class LessonInit {
  constructor(
    private http: HttpClient,
    private lessonService: LessonsService,
  ) { }

  load() {
    const testFolder = '../Lessons/';
    var that = this;
    let tmp, lessonObject = [Object.create(Lesson), Object.create(Lesson), Object.create(Lesson), Object.create(Lesson)];
    let count = 1;
    let lessons = that.lessonService.getLessonTitles();

    lessons.forEach(function(lesson) {

      that.http.get(('../Lessons/'+lesson), { responseType: 'text' })
        .subscribe(data => {
          let html = parseMd(data);

          html = html.replace(/<p>/g, '<p></p><p>');
          lessonObject[count - 1].content = html;
          //let md = grab file
          lessonObject[count - 1].title = data.match(/[\#]{1}(.+)/)[1].substr(1);
          tmp = "";
          tmp = data.match(/[\#]{2}(.+)/);
          lessonObject[count - 1].parts = [];

          while(tmp != null) {
            data = data.slice(tmp.index + tmp.length);
            lessonObject[count - 1].parts.push(tmp[1].substr(1));
            tmp = data.match(/[\#]{2}(.+)/);
          }
          lessonObject[count - 1].id = count;
          count++;
          that.lessonService.addLesson(lessonObject[count - 2]);

        })
    });
  }
}
