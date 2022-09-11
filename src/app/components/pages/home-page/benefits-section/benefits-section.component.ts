import { Component, Input } from '@angular/core';
import { benefitLogos } from 'src/data/logos';

@Component({
  selector: 'app-benefits-section',
  templateUrl: './benefits-section.component.html',
  styleUrls: ['./benefits-section.component.scss'],
})
export class BenefitsSectionComponent {
  @Input()
  screen!: string;

  logos = benefitLogos;
}
