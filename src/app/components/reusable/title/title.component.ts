import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<span [ngClass]="titleClasses">{{ label }}</span>`,
  styles: [
    `
      .title {
        font-family: 'effra', sans-serif;
        font-style: normal;
        line-height: 112%;
      }
      .title--extra-large {
        font-weight: 900;
        font-size: 72px;
      }
      .title--large {
        font-weight: 700;
        font-size: 72px;;
      }
      .title--medium {
        font-weight: 700;
        font-size: 64px;
      }
      .title--small {
        font-weight: 900;
        font-size: 36px;
      }
      .title--extra-small {
        font-weight: 700;
        font-size: 36px;
      }
      .title--white {
        color: white;
      }
      .title--black {
        color: black;
      }
      .title--grey {
        color: #ADADAD;
      }
      .title--transparent {
        color: #87D322;
        opacity: 0.7;
      }
    `,
  ],
})
export class TitleComponent {
  @Input()
  label = 'Title';

  @Input()
  size: 'extra-large' | 'large' | 'medium' | 'small' | 'extra-small' = 'extra-large';

  @Input()
  color: 'white' | 'black' | 'grey' | 'transparent' = 'white';

  public get titleClasses(): string[] {
    if (this.color === 'white') {
      ('title--white');
    } else if (this.color === 'black') {
      ('title--black');
    } else if (this.color === 'grey') {
      ('title--grey');
    } else {
      ('title--transparent');
    }
    if (this.size === 'extra-large') {
      ('title--extra-large');
    } else if (this.size === 'large') {
      ('title--large');
    } else if (this.size === 'medium') {
      ('title--medium');
    } else if (this.size === 'small') {
      ('title--small');
    } else {
      ('title--extra-small');
    }
    return ['title', `title--${this.size}`, `title--${this.color}`];
  }
}
