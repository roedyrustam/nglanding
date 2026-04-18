import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Directive({
  selector: '[appMagnetic]',
  standalone: true
})
export class MagneticDirective {
  @Input() strength: number = 30; // Max movement in pixels

  constructor(private el: ElementRef, private renderer: Renderer2, private audioService: AudioService) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.audioService.playHover();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const bound = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - bound.left - bound.width / 2;
    const y = event.clientY - bound.top - bound.height / 2;

    const moveX = (x / (bound.width / 2)) * this.strength;
    const moveY = (y / (bound.height / 2)) * this.strength;

    this.renderer.setStyle(this.el.nativeElement, 'transform', `translate(${moveX}px, ${moveY}px) scale(1.05)`);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0, 0) scale(1)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)');
  }
}
