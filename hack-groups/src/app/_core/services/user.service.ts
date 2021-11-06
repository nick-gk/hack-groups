import { Injectable } from '@angular/core';
import StorageHelper from '../helpers/Storage.helper';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs';
import Urls from '../constants/Urls';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _currentUser: User = null;
  private currentUserSource = new BehaviorSubject<User>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private router: Router) {}

  get currentUser(): User {
    return this._currentUser;
  }

  setCurrentUser(currentUser: User) {
    this.currentUserSource.next(currentUser);
    this._currentUser = currentUser;
  }

  isLoggedIn() {
    return this._currentUser != null;
  }

  logout() {
    StorageHelper.killSession();
    this.setCurrentUser(null);
    this._currentUser = null;
    this.router.navigate([Urls.BASE]);
  }
}
