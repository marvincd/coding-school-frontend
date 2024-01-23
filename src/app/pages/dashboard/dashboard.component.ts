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
  course: any = {
    "name": "",
    "video": "",
    "audio": ""
  };
  courses :Array<any>= [];
  user:User | undefined;
  constructor(private http: HttpClient, private router: Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get('https://school-project-api-pnsh.onrender.com/api/users/current').subscribe((res:any)=>{
          console.log(res);
          this.user = res;
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
    this.http.get('https://school-project-api-pnsh.onrender.com/api/courses/getAllCourse').subscribe((res:any)=>{
      console.log(res);
            this.courses = res;
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
    try {
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
    } catch (error) {
      console.log(error);
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
  extractLink(theembed:string){
    const position =  theembed.search("src=");
    const newString = theembed.slice(position+5);
    //swap the string face
    const quotePos = newString.search('"');
    const realString = newString.slice(0,quotePos);
    return realString;
 }
}

interface User {
  _id: string,
  username: string,
  email: string,
  createdAt: string
}