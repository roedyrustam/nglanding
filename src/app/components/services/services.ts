/** Develop By Pandu Talenta Digital | Fullstack By Roedy rustam */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

}
