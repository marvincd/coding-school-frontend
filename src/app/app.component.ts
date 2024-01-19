import { Component } from '@angular/core';
import { NavBarService } from './services/nav-bar.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coding_school';
  loading = false;
  constructor(private auth: AuthService, private router: Router){}
  
}
