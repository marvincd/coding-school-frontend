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
