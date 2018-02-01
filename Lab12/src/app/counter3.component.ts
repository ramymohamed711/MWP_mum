import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter3',
  template: `
  <p>
   {{counter}}
  </p>
  <button (click)="inC()">+</button>
  <button (click)="deC()">-</button>
  <p><ng-content></ng-content></p>

`,
  styles: []
})
export class Counter3Component implements OnInit {
  @Input('counter') counter :number;
  public counterValue = this.counter   ; 

  @Output() CounterChange = new EventEmitter();

  constructor() { 
  }

  inC(){
    this.counter ++;
    this.counterValue = this.counter
    this.CounterChange.emit(this.counterValue);
    // this.counterValue ++;
  }
  deC(){
    this.counter--;
    this.counterValue = this.counter 
    this.CounterChange.emit(this.counterValue);
  //  this.counterValue --;
  }
  ngOnInit() {
  }

}
