import { Component } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public navBarService: NavBarService){
    this.navBarService.customVariable.value.showNavbar = false;
    this.navBarService.customVariable.next({
      showNavbar: false
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.navBarService.customVariable.next({
      showNavbar: false
    });
  }
}
