import { NavBarService } from 'src/app/services/nav-bar.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginObj: any = {
    "email": "",
    "password": ""
  };
  constructor(private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard'); 
    }
    localStorage.setItem('authenticating', "true");
  }
  onLogin() {
    // debugger;
    console.log(this.loginObj);
    this.auth.login(this.loginObj);
  }
  ngOnDestroy(){
    localStorage.setItem('authenticating', "false");
  }
}
