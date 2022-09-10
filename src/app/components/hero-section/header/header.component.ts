import { Component, HostListener } from '@angular/core';
import { header } from 'src/data/navigation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  burger = false;

  wideScreen = true;

  showMenu = false;

  innerWidth!: number;

  linksAndLabels = header;

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth > 768) {
      this.wideScreen = true;
      this.burger = false;
    } else {
      this.wideScreen = false;
      this.burger = true;
    }
  }

  onShowMenu() {
    this.showMenu = !this.showMenu;
  }
}
