import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  mismatch:boolean = false;
  signInObj: any = {
    "username": "",
    "email": "",
    "password": ""
  };
  newPassword:string = "";
  register:string = "Sign Up";
  constructor(private auth: AuthService, private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard'); 
    }
    localStorage.setItem('authenticating', "true");
  }
  onSignUp() {
    this.register = "Registering..."
    // debugger;
    if (this.newPassword == this.signInObj.password && this.signInObj.password != ""){
        console.log(this.signInObj);
        this.http.post('https://school-project-api-pnsh.onrender.com/api/users/register', this.signInObj).subscribe((res:any)=>{
          if(res._id) {
            let loginObj: any = {
              "email": this.signInObj.email,
              "password": this.signInObj.password
            };
            console.log(res);
            console.log('sign up Success');
            this.auth.login(loginObj);
            this.router.navigateByUrl('/dashboard');
          } else {console.log(res);
            console.log('Failed to login');
          }
        })
    }
    else {
      this.mismatch = true;
    }
  }
  ngOnDestroy(){
    localStorage.setItem('authenticating', "false");
  }
}
