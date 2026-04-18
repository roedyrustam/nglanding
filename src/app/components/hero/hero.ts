/** Develop By Pandu Talenta Digital | Fullstack By Roedy rustam */
import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { MagneticDirective } from '../../directives/magnetic.directive';
import { Hero3DComponent } from './hero-3d';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, MagneticDirective, Hero3DComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  mouseX = signal(0);
  mouseY = signal(0);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Calculate position from 0 to 1 relative to the component
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    
    // Smoothly update signals (normalize around center -0.5 to 0.5)
    this.mouseX.set(x - 0.5);
    this.mouseY.set(y - 0.5);
  }
}
