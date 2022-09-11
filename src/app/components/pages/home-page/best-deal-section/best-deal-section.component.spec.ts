import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDealSectionComponent } from './best-deal-section.component';

describe('BestDealSectionComponent', () => {
  let component: BestDealSectionComponent;
  let fixture: ComponentFixture<BestDealSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestDealSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestDealSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
