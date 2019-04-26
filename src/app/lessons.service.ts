import { Injectable } from '@angular/core';
import { Lesson } from './classes/lesson/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  lessons: Lesson[] = [];
  lessonTitles: string[] = ["Lesson1Part1.md", "Lesson1Part2.md", "Lesson2Part1.md", "Lesson2Part2.md"];

  constructor() { }

  getLesson(id): Lesson {
    return this.lessons.find(function(lesson) {
      return lesson.id == id;
    });
  }

 getLessons(): Lesson[] {
  return this.lessons;
 }

 getLessonTitles(): string[] {
   return this.lessonTitles;
 }

 addLessonTitle(title: string) {
   this.lessonTitles.push(title);
 }

 addLesson(lesson: Lesson) {
   this.lessons.push(lesson);
 }
}
