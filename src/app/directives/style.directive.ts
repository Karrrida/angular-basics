import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color: string = 'blue'
  //@Input() fontWeight: string = 'normal'
  @Input() dStyle: { border?: string; borderRadius?: string; fontWeight?: string; } | undefined

  @HostBinding('style.color') elColor: any = null

  constructor(private el: ElementRef, private renderer: Renderer2) {
    //console.log(el.nativeElement)
    //this.renderer.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter', ['$event.target']) onEnter() {
    this.elColor = this.color
    //this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
    // this.renderer.setStyle(this.el.nativeElement, 'border', this.dStyle?.border)
    // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle?.borderRadius)
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.dStyle?.fontWeight)
  }
  @HostListener('mouseleave', ['$event.target']) onLeave() {
    this.elColor = null
    //this.renderer.setStyle(this.el.nativeElement, 'color', null)
    // this.renderer.setStyle(this.el.nativeElement, 'border', null)
    // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null)
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null)
  }

 }
