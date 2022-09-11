import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsSectionComponent } from './platforms-section.component';

describe('PlatformsSectionComponent', () => {
  let component: PlatformsSectionComponent;
  let fixture: ComponentFixture<PlatformsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
