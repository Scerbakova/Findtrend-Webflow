import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pointer',
  templateUrl: './pointer.component.html',
  styleUrls: ['./pointer.component.scss'],
})
export class PointerComponent {
  @Input()
  label!: string;

  @Input()
  image!: string;

  @Input()
  arrowFirst = false;

  @Input()
  small: 'small' | 'large' = 'large';

  @Input()
  color: 'white' | 'black' = 'white';

  @Input()
  rotate: 'rotated' | 'not-rotated' = 'not-rotated';

  public get arrowClasses(): string[] {
    return ['pointer__image', `arrow--${this.arrowFirst}`];
  }
  public get pointerTextClasses(): string[] {
    if (this.color === 'white') {
      ('pointer--white');
    } else {
      ('pointer--black');
    }
    return ['pointer__text', `pointer--${this.color}`, `pointer__text--${this.small}`,`pointer--${this.rotate}`];
  }
}
