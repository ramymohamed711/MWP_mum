import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input() visibility: boolean ; 
  e: ElementRef;
  constructor(e: ElementRef , r: Renderer ) { 
    this.e = e ;
  }
  ngOnInit(){ // reached after all bound properties are initilized
    if(this.visibility)
    this.e.nativeElement.style.display = 'block';
    else
    this.e.nativeElement.style.display = 'none';
  }

 
}
