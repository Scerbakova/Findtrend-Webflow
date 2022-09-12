import { Component, Input } from '@angular/core';
import { PlanCard } from 'src/data/plans';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent {

  @Input()
  plan!: PlanCard;
}
