import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
     {{counterValue}}
    </p>
    <button (click)="inC()">+</button>
    <button (click)="deC()">-</button>
    <p><ng-content></ng-content></p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  private counterValue  ;
  constructor() {
    this.counterValue = 0 ;
   }
   inC(){
     this.counterValue ++;
   }
   deC(){
     this.counterValue --;
   }

  ngOnInit() {
  }

}
