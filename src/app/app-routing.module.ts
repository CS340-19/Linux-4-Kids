import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReadOnlyLessonComponent } from './read-only-lesson/read-only-lesson.component';
import { TerminalLessonComponent } from './terminal-lesson/terminal-lesson.component';
import { LessonSelectComponent } from './lesson-select/lesson-select.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomePageComponent },
  { path: 'lesson-select', component: LessonSelectComponent },
  { path: 'terminal-lesson', component: TerminalLessonComponent },
  { path: 'text-lesson', component: ReadOnlyLessonComponent }
//  { path: 'about', component: ExampleComponent },
  //{ path: 'contact', component: ExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
