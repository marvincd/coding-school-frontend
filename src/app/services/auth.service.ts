import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any) {
    const loginObj = {
      "email": email,
      "password": password
    };
    console.log(loginObj);
    this.http.post('https://school-project-api-pnsh.onrender.com/api/users/login', loginObj).subscribe((res:any)=>{
      if(res.accessToken) {
        console.log(res);
        console.log('login Success');
        this.setToken(res.accessToken);
        this.router.navigateByUrl('/dashboard');
      } else {
        console.log('Failed to login');
      }
    })
  }
}