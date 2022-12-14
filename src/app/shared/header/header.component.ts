import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() signedIn$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); //async in html instead of subscribe

  constructor() { }

  ngOnInit(): void {
    console.log("HeaderComponent signedIn", this.signedIn$);
  }

}
