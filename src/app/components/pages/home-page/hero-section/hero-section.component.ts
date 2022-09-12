import { Component, Input } from '@angular/core';
import { tabs } from 'src/data/tabs';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {

  @Input()
  screen!: string;

  tabs = tabs
}
