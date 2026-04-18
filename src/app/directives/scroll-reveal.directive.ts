/** Develop By Pandu Talenta Digital | Fullstack By Roedy rustam */
import { Directive, ElementRef, Input, OnInit, Renderer2, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') animationType: string = 'up'; // up, down, left, right, scale, blur
  @Input() delay: number = 0;
  @Input() threshold: number = 0.15;

  private observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit() {
    this.prepareElement();
    if (isPlatformBrowser(this.platformId)) {
      this.createObserver();
    } else {
      // Fallback for SSR
      this.renderer.addClass(this.el.nativeElement, 'reveal-active');
    }
  }

  private prepareElement() {
    this.renderer.addClass(this.el.nativeElement, 'reveal-prepare');
    this.renderer.addClass(this.el.nativeElement, `reveal-${this.animationType}`);
    if (this.delay > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'transition-delay', `${this.delay}ms`);
    }
  }

  private createObserver() {
    const options = {
      root: null,
      threshold: this.threshold
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'reveal-active');
          if (this.observer) {
            this.observer.unobserve(this.el.nativeElement);
          }
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
