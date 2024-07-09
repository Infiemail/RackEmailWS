import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCampaignComponent } from './demo-campaign.component';

describe('DemoCampaignComponent', () => {
  let component: DemoCampaignComponent;
  let fixture: ComponentFixture<DemoCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoCampaignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
