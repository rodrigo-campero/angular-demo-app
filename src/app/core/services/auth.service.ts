import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser = 'currentUser';
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>('users/authenticate', { username: username, password: password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem(this.currentUser, JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem(this.currentUser);
  }

  get isLoggedIn() {
    return  localStorage.getItem(this.currentUser) != null;
  }

  get isSuperAdmin() {
    return true;
  }
}
