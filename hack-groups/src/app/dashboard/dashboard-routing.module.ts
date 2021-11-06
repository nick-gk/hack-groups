import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import Urls from '../_core/constants/Urls';
import { PostsComponent } from './posts/posts.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: Urls.POST,
    component: PostComponent
  },
  {
    path: Urls.POSTS,
    component: PostsComponent
  },
  {
    path: Urls.ADD_NEW_PSOT,
    component: AddNewPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
