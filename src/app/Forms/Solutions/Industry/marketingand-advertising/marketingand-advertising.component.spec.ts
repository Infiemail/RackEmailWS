import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingandAdvertisingComponent } from './marketingand-advertising.component';

describe('MarketingandAdvertisingComponent', () => {
  let component: MarketingandAdvertisingComponent;
  let fixture: ComponentFixture<MarketingandAdvertisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingandAdvertisingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketingandAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
