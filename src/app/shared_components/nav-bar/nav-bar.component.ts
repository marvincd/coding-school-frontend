import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  loggedin = false;
  authenticating = false;
  constructor(private auth: AuthService, private router: Router){}
    // debugger;
    
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.loggedin = this.auth.isLoggedIn();
    this.authenticating = localStorage.getItem('authenticating') == 'true';
  }

}
