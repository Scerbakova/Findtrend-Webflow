import { Component, Input } from '@angular/core';
import { Navigation } from 'src/data/navigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input()
  burger!: boolean;

  @Input()
  column!: boolean;

  @Input() linksAndLabels!: Navigation[];

  get ulClass(): string[] {
    const mode = this.burger ? 'navigation__list--burger' : 'navigation__list';

    return ['navigation__list', mode];
  }
}

