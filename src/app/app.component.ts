import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'postify';

  constructor(private authService: AuthService){}

  ngOnInit(): void {
  }

  loginUser() {
    const email = 'scarlet123@gmail.com';
    const password = 'scarlet@123';
    this.authService.loginUser(email, password).subscribe(
      (response: any) => {
        const authToken = response.data.loginUser.auth_token;
        const user = response.data.loginUser.user;

        console.log(authToken);
        console.log(user);

        this.authService.setAuthTokenAndUser(authToken, user);
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }

}
