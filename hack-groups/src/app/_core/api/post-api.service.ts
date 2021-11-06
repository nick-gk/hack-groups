import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly resourceUrl: string = '/api';

  constructor(
    private apiService: ApiService
  ) {
  }

  getWelcomePopup() {
    return this.apiService.get(`${this.resourceUrl}/get-welcome-popup`);
  }

}
