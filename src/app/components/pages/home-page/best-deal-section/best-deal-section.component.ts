import { Component, Input } from '@angular/core';
import { Plans } from 'src/data/plans';

@Component({
  selector: 'app-best-deal-section',
  templateUrl: './best-deal-section.component.html',
  styleUrls: ['./best-deal-section.component.scss'],
})
export class BestDealSectionComponent {
  @Input()
  screen!: string;

  plan = 'Monthly';

  plans = Plans;

  changePlan() {
    this.plan === 'Monthly' ? (this.plan = 'Yearly') : (this.plan = 'Monthly');
  }
}
