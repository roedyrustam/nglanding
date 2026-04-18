/** Develop By Pandu Talenta Digital | Fullstack By Roedy rustam */
import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective, MagneticDirective],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
