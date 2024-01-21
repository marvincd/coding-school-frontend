import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  id: string = "";
  title:string = "";
  private sub: any;
  embedLink: string = "";
  youtubeEmbedLink = ""
  newLink: SafeResourceUrl;
  newVideoLink: SafeResourceUrl;
  // position =  this.theembed.search("src=");
  // newString = this.theembed.slice(this.position+5);
  // //swap the string face
  // quotePos = this.newString.search("'");
  // realString = this.newString.slice(0,this.quotePos);
  constructor(protected _sanitizer: DomSanitizer, private route: ActivatedRoute, private http: HttpClient,) {
    this.newLink = this._sanitizer.bypassSecurityTrustResourceUrl(this.embedLink);
    this.newVideoLink = this._sanitizer.bypassSecurityTrustResourceUrl(this.youtubeEmbedLink);
    //  console.log(this.realString);
    console.log("opened course component constructor");
  }
  ngOnInit() {
    console.log("opened course component");
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number
       console.log(this.id);
       this.http.get('http://localhost:1000/api/courses/' + this.id).subscribe((res:any)=>{
        console.log(res);
        this.title = res.name;
        this.embedLink = res.audio;
        this.newLink = this._sanitizer.bypassSecurityTrustResourceUrl(this.embedLink);
        this.youtubeEmbedLink = res.video;
        this.newVideoLink = this._sanitizer.bypassSecurityTrustResourceUrl(this.youtubeEmbedLink);
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
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}
