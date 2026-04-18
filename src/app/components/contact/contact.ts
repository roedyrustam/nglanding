import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective, MagneticDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
