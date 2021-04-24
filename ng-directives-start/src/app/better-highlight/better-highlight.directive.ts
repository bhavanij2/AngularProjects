import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input('appBetterHighlight') higlightColor: string = 'red'
  @Input() defaultColor: string = 'yellow'

  @HostBinding('style.backgroundColor') backgroundColor: string

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'grey')
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'grey')
    this.backgroundColor = this.higlightColor
  }

  @HostListener('mouseleave') onmouseleave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor
  }
}
