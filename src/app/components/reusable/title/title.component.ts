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
        font-size: 72px;
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
        color: #adadad;
      }
      .title--transparent {
        color: #87d322;
        opacity: 0.9;
      }
    `,
  ],
})
export class TitleComponent {
  @Input()
  label = 'Title';

  @Input()
  size: 'extra-large' | 'large' | 'medium' | 'small' | 'extra-small' =
    'extra-large';

  @Input()
  color: 'white' | 'black' | 'grey' | 'transparent' = 'white';

  titleColour() {
    switch (this.color) {
      case 'black':
        'title--black';
        break;
      case 'grey':
        'title--grey';
        break;
      case 'transparent':
        'title--transparent';
        break;
      default:
        'title--white';
    }
  }

  titleSize() {
    switch (this.size) {
      case 'large':
        'title--large';
        break;
      case 'medium':
        'title--medium';
        break;
      case 'small':
        'title--small';
        break;
      case 'extra-small':
        'title--extra-small';
        break;
      default:
        'title--extra-large';
    }
  }

  public get titleClasses(): string[] {
    this.titleColour();
    this.titleSize();
    return ['title', `title--${this.size}`, `title--${this.color}`];
  }
}
