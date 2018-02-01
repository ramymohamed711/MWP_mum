import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  private nativeElement : Node;
  constructor(private e: ElementRef, private r: Renderer) { 
    // e.nativeElement.style.fontSize = '22px'
    e.nativeElement.style.textTransform  = "uppercase";
    
}


}
