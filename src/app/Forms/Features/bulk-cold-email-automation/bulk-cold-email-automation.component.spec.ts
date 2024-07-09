import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkColdEmailAutomationComponent } from './bulk-cold-email-automation.component';

describe('BulkColdEmailAutomationComponent', () => {
  let component: BulkColdEmailAutomationComponent;
  let fixture: ComponentFixture<BulkColdEmailAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkColdEmailAutomationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkColdEmailAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
