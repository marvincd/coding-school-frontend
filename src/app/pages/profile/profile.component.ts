import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  course: any = {
    "name": "",
    "video": "",
    "audio": ""
  };
  create = "Create course";
  courses :Array<any>= [];
  user:User | undefined;
  inputingCourse:boolean = false;
  constructor(private auth: AuthService, private http: HttpClient, private router: Router){}
  ngOnInit(): void {
    console.log("making the call");
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
        this.http.get('https://school-project-api-pnsh.onrender.com/api/courses').subscribe((res:any)=>{
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
  onInputCourse(){
    this.inputingCourse = !this.inputingCourse;
  }
  onCreateCourse() {
    this.create = "Creating course";
    // debugger;
    console.log(this.course);
    this.course.video = this.extractLink(this.course.video);
    this.course.audio = this.extractLink(this.course.audio);
    console.log(this.course);
    this.http.post('https://school-project-api-pnsh.onrender.com/api/courses', this.course).subscribe((res:any)=>{
      if(res) {
        console.log(res);
        console.log(res.message);
        // localStorage.setItem('loginTOken', res.accessToken);
        // this.router.navigateByUrl('/dashboard'); 
      } else {
        console.log(res);
      }
      this.router.navigateByUrl('/dashboard');
    })
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
