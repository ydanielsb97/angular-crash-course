import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "",
    component: CommentFormComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "about/:username",
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
