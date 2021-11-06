import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class PostApiService {
  private readonly resourceUrl: string = '/api';

  constructor(
    private apiService: ApiService
  ) {
  }

  getTablePosts() {
    return this.apiService.get(`${this.resourceUrl}/table-posts`);
  }

  postAnalyzePost(body: any): Observable<any> {
    return this.apiService.get(`${this.resourceUrl}/data-analysis/analyze`, body);
  }

}
