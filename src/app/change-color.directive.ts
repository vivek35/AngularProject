import { Directive,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(
    private Element: ElementRef,
    private renderer: Renderer2
  ) {
  	//Element.nativeElement.style.color = 'green'; 
  	this.renderer.setStyle(this.Element.nativeElement, 'color', 'blue');
  }


}
