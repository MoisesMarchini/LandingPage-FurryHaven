import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: 'img'
})
export class LazyLoadDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0');

    const imgElement = this.elementRef.nativeElement;

    imgElement.onload = () => {
      this.renderer.setStyle(imgElement, 'opacity', '1');
    };
  }
}
