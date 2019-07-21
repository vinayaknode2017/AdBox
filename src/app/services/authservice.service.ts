import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { User } from '../model/classes/auth.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }

  onSignUp(email: string, password: string) {

    return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBWBLv1JzSTSJNDEfc1PgvV5dnVkeZ6ksg',
      {
      email: email,
      password: password,
      returnSecureToken: true
      }
    ).pipe(catchError(this.HandleError), 
    tap(resData => {
      this.HandleAuthentication(
        resData.email, 
        resData.localId, 
        resData.idToken, 
        +resData.expiresIn);
    }));
  }

  onSignIn(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBWBLv1JzSTSJNDEfc1PgvV5dnVkeZ6ksg',
      {
      email: email,
      password: password,
      returnSecureToken: true
      }
    ).pipe(catchError(this.HandleError),
    tap(resData => {
      this.HandleAuthentication(
        resData.email, 
        resData.localId, 
        resData.idToken, 
        +resData.expiresIn);
    }));
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/signin']);
  }

  HandleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'an unknown error occured';
    if(!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch(errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'this email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'this email is not registered';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'invalid user name or password';
        break;
      case 'USER_DISABLED':
        errorMessage = 'user account is disabled';
        break;
    }
    return throwError(errorMessage);
  }

  private HandleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(
      email, 
      userId, 
      token, 
      expirationDate
    );

    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData) {
      return null;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if(loadedUser.token) {
      this.user.next(loadedUser);
    }
  }
}
