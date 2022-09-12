import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-join-section',
  templateUrl: './join-section.component.html',
  styleUrls: ['./join-section.component.scss']
})
export class JoinSectionComponent {

  @Input()
  screen!: string
}
