import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  lastname = "Success";
  answer = '';
  question: any = {
    "prompt": ""
  };
  constructor(private http: HttpClient, private router: Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get('http://localhost:1000/api/courses/getAllCourse').subscribe((res:any)=>{
      console.log(res);
      // if(res._id) {
      //   let loginObj: any = {
      //     "email": this.signInObj.email,
      //     "password": this.signInObj.password
      //   };
      //   console.log(res);
      //   console.log('sign up Success');
      //   this.auth.login(loginObj);
      //   this.router.navigateByUrl('/dashboard');
      // } else {console.log(res);
      //   console.log('Failed to login');
      // }
    });
  }

  onAsk() {
    // debugger;
    console.log(this.question);
    this.http.post('https://school-project-api-pnsh.onrender.com/api/mixtral', this.question).subscribe((res:any)=>{
      if(res.message) {
        console.log(res);
        console.log(res.message);
        this.answer = res.message;
        // localStorage.setItem('loginTOken', res.accessToken);
        // this.router.navigateByUrl('/dashboard'); 
      } else {
        console.log(res);
      }
    })
  }
}
