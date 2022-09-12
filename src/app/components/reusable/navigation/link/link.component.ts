import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styles: [
    `
      .link:hover {
        color: grey;
      }
    `,
  ],
})
export class LinkComponent {
  @Input()
  link!: string;

  @Input()
  color!: string;

  @Input()
  label!: string;
}
