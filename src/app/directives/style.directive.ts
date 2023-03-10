import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el.nativeElement)
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter', ['$event.target']) onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red')
  }
  @HostListener('mouseleave', ['$event.target']) onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', null)
  }
 }
