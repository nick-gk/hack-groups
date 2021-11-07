import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TruncateCharactersPipe } from './pipes/truncate.pipe';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';


@NgModule({
  declarations: [AppLoaderComponent, AppHeaderComponent, AppFooterComponent, TruncateCharactersPipe],
  imports: [
    CommonModule,
    MatProgressBarModule,
    NzFormModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzProgressModule
  ],
  exports: [
    AppLoaderComponent,
    AppHeaderComponent,
    AppFooterComponent,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzButtonModule,
    NzGridModule,
    TruncateCharactersPipe,
    NzIconModule,
    NzProgressModule
  ]
})
export class SharedModule { }
