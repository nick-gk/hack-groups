import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [AppLoaderComponent, AppHeaderComponent, AppFooterComponent],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [
    AppLoaderComponent,
    AppHeaderComponent,
    AppFooterComponent
  ]
})
export class SharedModule { }
