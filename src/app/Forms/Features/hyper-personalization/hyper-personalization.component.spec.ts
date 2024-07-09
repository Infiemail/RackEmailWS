import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperPersonalizationComponent } from './hyper-personalization.component';

describe('HyperPersonalizationComponent', () => {
  let component: HyperPersonalizationComponent;
  let fixture: ComponentFixture<HyperPersonalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HyperPersonalizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HyperPersonalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
