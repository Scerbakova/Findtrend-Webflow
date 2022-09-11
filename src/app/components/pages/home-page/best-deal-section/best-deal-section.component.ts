import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-best-deal-section',
  templateUrl: './best-deal-section.component.html',
  styleUrls: ['./best-deal-section.component.scss']
})
export class BestDealSectionComponent {

  @Input()
  screen!: string;

  plan = 'Monthly'

  changePlan() {
    this.plan === 'Monthly' ? this.plan = 'Yearly' : this.plan = 'Monthly'
  }
}
