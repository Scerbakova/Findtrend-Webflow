import { Component, HostListener } from '@angular/core';
import { footer } from 'src/data/navigation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  burger = false;

  wideScreen = true;

  innerWidth!: number;

  linksAndLabels = footer;

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth > 912) {
      this.wideScreen = true;
      this.burger = false;
    } else {
      this.wideScreen = false;
      this.burger = true;
    }
  }
}
