import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/_core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnDestroy {
  loading: boolean;
  loadingSub: Subscription;

  constructor(private loaderService: LoaderService) {
    this.loadingSub = this.loaderService.loading$.subscribe((value) => (this.loading = value));
  }

  ngOnDestroy(): void {
    this.loadingSub.unsubscribe();
  }
}
