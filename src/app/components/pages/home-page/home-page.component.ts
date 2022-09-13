import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  screen!: 'wideScreen' | 'smallScreen';
  innerWidth: number | undefined;

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth >= 720) {
      this.screen = 'wideScreen';
    } else {
      this.screen = 'smallScreen';
    }
    return this.innerWidth;
  }
}
