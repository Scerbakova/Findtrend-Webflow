import { Component, Input } from '@angular/core';
import { socialMediaLogos } from 'src/data/logos';

@Component({
  selector: 'app-platforms-section',
  templateUrl: './platforms-section.component.html',
  styleUrls: ['./platforms-section.component.scss']
})
export class PlatformsSectionComponent {
  
  @Input()
  screen!: string;

  logos = socialMediaLogos;

  activeButton = 'twitter';

  setActive(i: number) {
    this.activeButton = this.logos[i].alt
  }
}
