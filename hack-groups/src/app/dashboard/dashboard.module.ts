import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../_shared/shared.module';
import { PostsComponent } from './posts/posts.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [DashboardComponent, PostsComponent, AddNewPostComponent, PostComponent],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCardModule,
    NzFormModule,
    ChartsModule,
    SharedModule,
    NzTableModule
  ]
})
export class DashboardModule { }
