import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  screen!: "wideScreen" | "smallScreen";
  innerWidth: number | undefined;

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth >= 720) {
      this.screen = 'wideScreen';
    } else {
      this.screen = 'smallScreen';
    }
    return this.innerWidth
  }
}
