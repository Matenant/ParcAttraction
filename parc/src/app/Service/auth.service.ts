import { Injectable, inject } from '@angular/core';
import { UserInterface } from '../Interface/user.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  http = inject(HttpClient);
  
  isLoggedIn = false;
  user: UserInterface|null = null;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(form: object): Observable<boolean> {
    return this.http.post<UserInterface>(
      'http://127.0.0.1:5000/login',
      {
        ...form,
      }
    ).pipe(map(user => {
      this.isLoggedIn = user.token ? true : false;
      this.user = user ? user : null;
      localStorage.setItem("user", JSON.stringify(user));
      return this.isLoggedIn;
    }));
  }

  logout(): void {
    this.isLoggedIn = false;
    this.user = null;
    localStorage.setItem("user", "");
  }

  setUser() {
    const user = localStorage.getItem("user");
    if (user !== "" && user !== null) {
      this.isLoggedIn = (JSON.parse(user) as UserInterface).token ? true : false;
      this.user = JSON.parse(user) as UserInterface;
    } else {
      this.isLoggedIn = false;
      this.user = null;
    }
  }
}