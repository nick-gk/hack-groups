import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { debounce, debounceTime, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl;

  // prettier-ignore
  constructor(
    private http: HttpClient,
  ) {
    this.apiUrl = 'http://192.168.1.161:5000/';
  }

  get(path: string, params = {}, body = {}) {
    return this.http.get(`${this.apiUrl}${path}`, { params });
  }

  put(path: string, body = {}, params = {}) {
    return this.http.put(`${this.apiUrl}${path}`, body, { params });
  }

  post(path: string, body = {}, params = {}, headers = {}) {
    return this.http.post(`${this.apiUrl}${path}`, body, { params, headers });
  }

  delete(path: string, params = {}) {
    return this.http.delete(`${this.apiUrl}${path}`, { params });
  }
}
