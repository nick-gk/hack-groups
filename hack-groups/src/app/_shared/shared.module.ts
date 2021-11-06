import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppLoaderComponent, AppHeaderComponent, AppFooterComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    NzFormModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NzLayoutModule
  ],
  exports: [
    AppLoaderComponent,
    AppHeaderComponent,
    AppFooterComponent,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule
  ]
})
export class SharedModule { }
