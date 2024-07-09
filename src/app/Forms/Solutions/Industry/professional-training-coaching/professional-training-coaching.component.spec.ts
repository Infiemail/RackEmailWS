import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalTrainingCoachingComponent } from './professional-training-coaching.component';

describe('ProfessionalTrainingCoachingComponent', () => {
  let component: ProfessionalTrainingCoachingComponent;
  let fixture: ComponentFixture<ProfessionalTrainingCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalTrainingCoachingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalTrainingCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
