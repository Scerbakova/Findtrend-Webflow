import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTabsSectionComponent } from './open-tabs-section.component';

describe('OpenTabsSectionComponent', () => {
  let component: OpenTabsSectionComponent;
  let fixture: ComponentFixture<OpenTabsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenTabsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenTabsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
