import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackcolor]'
})
export class BackcolorDirective {

  constructor(private el: ElementRef) { }
  public highLight(bgColor: string, tColor: string, h: string, r: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = tColor;
    this.el.nativeElement.style.height = h;
    this.el.nativeElement.style.transition = r;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highLight('green', 'white', 'auto', '2s');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.highLight(null, null, null, '2s');
  }

}
