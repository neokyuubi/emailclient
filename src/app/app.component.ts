import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signedIn$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(private authService:AuthService){
    this.signedIn$ = this.authService.signedIn$;
  }

  ngOnInit()
  {
    this.authService.checkAuth().subscribe();
  }

}
