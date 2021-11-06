import { Injectable } from '@angular/core';
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

}
