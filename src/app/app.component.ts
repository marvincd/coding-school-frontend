import { Component } from '@angular/core';
import { NavBarService } from './services/nav-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coding_school';
  public showNavbar:boolean;
  constructor(public navBarService: NavBarService) {
    this.showNavbar = navBarService.customVariable.value.showNavbar;
    this.navBarService.customVariable.subscribe({
      next: newValue => this.showNavbar = newValue
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showNavbar = this.navBarService.customVariable.value.showNavbar;
    this.navBarService.customVariable.subscribe({
      next: newValue => this.showNavbar = newValue
    });
  }
  
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.showNavbar = this.navBarService.customVariable.value.showNavbar;
    this.navBarService.customVariable.subscribe({
      next: newValue => this.showNavbar = newValue
    });
    
  }

 

}
