import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../_shared/shared.module';
import { PostsComponent } from './posts/posts.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [DashboardComponent, PostsComponent, AddNewPostComponent, PostComponent],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
