import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackcolor]'
})

export class BackcolorDirective {
  @Input() myColor: string;

  constructor(private el: ElementRef) { }

  public highLight(bgColor: string, tColor: string, h: string, r: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = tColor;
    this.el.nativeElement.style.height = h;
    this.el.nativeElement.style.transition = r;
    this.el.nativeElement.innerHTML = 'Take your cursor off Me 👺';
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.myColor != null) {
      this.highLight(this.myColor, 'white', 'auto', '0.5s');
    }
    else {
      this.highLight('green', 'white', 'auto', '0.5s');
    }

  }
  @HostListener('mouseleave') onmouseleave() {
    this.highLight(null, null, null, '0.5s');
    this.el.nativeElement.innerHTML = 'Hover Over Me🥺';
  }
}
