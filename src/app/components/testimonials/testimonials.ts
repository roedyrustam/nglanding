import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials {

}
