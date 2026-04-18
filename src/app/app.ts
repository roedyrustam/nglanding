import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Stats } from './components/stats/stats';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

import { Component, HostListener, signal } from '@angular/core';
import { AudioService } from './services/audio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    Hero,
    About,
    Services,
    Stats,
    Testimonials,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pandu Talenta Digital');

  constructor(private audioService: AudioService) {}

  @HostListener('click')
  onGlobalClick() {
    this.audioService.playClick();
  }
}
