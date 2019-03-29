import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import 'hammerjs';
import { TextContainerComponent } from './text-container/text-container.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReadOnlyLessonComponent } from './read-only-lesson/read-only-lesson.component';
import { TerminalLessonComponent } from './terminal-lesson/terminal-lesson.component';
import { LessonSelectComponent } from './lesson-select/lesson-select.component';
import { LessonLayoutComponent } from './lesson-layout/lesson-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BottombarComponent,
    TextContainerComponent,
    HomePageComponent,
    ReadOnlyLessonComponent,
    TerminalLessonComponent,
    LessonSelectComponent,
    LessonLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
