import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  public customVariable = new BehaviorSubject<any>({
    showNavbar: true
  }); 
}
