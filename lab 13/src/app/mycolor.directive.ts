import { Directive, ElementRef, Output, EventEmitter , Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  e: ElementRef;
  @Output() colorChange = new EventEmitter();
  colors = ['red','yellow','green','blue'];
  counter :number = 0 ; 
  constructor(e: ElementRef , r: Renderer ) { 
    this.e = e ;
  }

  @HostListener('click') foo(){this.counter++ ;
     this.e.nativeElement.style.color = this.colors[this.counter];
     this.colorChange.emit(this.colors[this.counter])
    }


}
