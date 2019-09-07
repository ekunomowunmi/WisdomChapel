import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loggedIn = false;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onLogin(){
    this.authService.login();
    this.loggedIn = true;
  }

}