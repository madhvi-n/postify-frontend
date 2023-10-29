import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { catchError } from 'rxjs/operators';
import { REGISTER_USER_MUTATION, LOGIN_USER_MUTATION } from '../../graphql-queries/auth.queries';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apollo: Apollo) {}

  registerUser(email: string, firstName: string, lastName: string,
    password: string, username: string) {
    return this.apollo.mutate({
      mutation: REGISTER_USER_MUTATION,
      variables: {
        email,
        firstName,
        lastName,
        password,
        username
      }
    }).pipe(
      catchError(error => {
        console.error('Registration error:', error);
        throw error;
      })
    );
  }

  loginUser(email: string, password: string) {
    return this.apollo.mutate({
      mutation: LOGIN_USER_MUTATION,
      variables: {
        email,
        password
      }
    }).pipe(
      catchError(error => {
        console.error('Login error:', error);
        throw error;
      })
    );
  }

  setAuthTokenAndUser(authToken: string, user: any) {
    localStorage.setItem('auth_token', authToken);
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Add a method to get the auth token from local storage
  getAuthToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Add a method to get the user data from local storage
  getUser(): any {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }
}
