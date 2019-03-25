import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component'

const routes: Routes = [
  { path: 'lesson', component: ExampleComponent }
  //{ path: 'example', component: ExampleComponent },
  //{ path: 'example', component: ExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
