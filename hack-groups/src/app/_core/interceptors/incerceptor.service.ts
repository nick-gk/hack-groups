import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import StorageHelper from '../helpers/Storage.helper';
import { LoaderService } from '../services/loader.service';
import { catchError, finalize } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { ToastrMessages } from '../constants/ToastrMessages';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  // private isRefreshing = false;
  // private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  // prettier-ignore
  constructor(
    // private authService: AuthService,
    private loaderService: LoaderService,
    private userService: UserService,
    private toastrService: ToastrService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.loaderService.show();
    request = this.setHeaders(request);
    return next
      .handle(request)
      .pipe(finalize(() => this.loaderService.hide()))
      .pipe(
        catchError((error: any) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.userService.logout();
              this.toastrService.error(...ToastrMessages.EXPIRED_SESSION);
              return of(null);
            } else {
              const err = error.error.message || error.error.error;
              return throwError(err);
            }
          }
        })
      );
  }

  private setHeaders(request: HttpRequest<any>) {
    let headers = request.headers
      .set('Access-Control-Allow-Origin', '*')
      .set('Cache-Control', 'no-cache')
      .set('Pragma', 'no-cache');
    const token = StorageHelper.getToken();

    headers = token
      ? headers.set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`)
      : headers.set('Authorization', 'Basic ZGlyZWN0b3J5OnNlY3JldA=='); // charity-directory username & password
    // headers.set('Authorization', 'Basic bWFya2V0cGxhY2U6c2VjcmV0'); // marketplace username & password

    return request.clone({ headers });
  }
}
