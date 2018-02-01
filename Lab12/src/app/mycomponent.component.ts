import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  template: `<ul>
    <li *ngFor="let s of arr"> {{s}} </li>
    </ul>
  `,
  styles: []
})
export class MycomponentComponent implements OnInit {
  @Input('arr') arr: string[] ;
  constructor( ) {
   }

  ngOnInit() {
  }

}
