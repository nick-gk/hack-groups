import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly resourceUrl: string = 'api';

  constructor(
    private apiService: ApiService
  ) {
  }

  postAnalyzePost(body: any): Observable<any> {
    return this.apiService.post(`${this.resourceUrl}/data-analysis/analyze`, body);
  }

  getMyPage(): Observable<any> {
    return this.apiService.get(`${this.resourceUrl}/competitors/my-page`);
  }

}
