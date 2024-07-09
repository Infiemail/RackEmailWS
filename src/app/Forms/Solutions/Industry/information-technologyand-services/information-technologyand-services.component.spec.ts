import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTechnologyandServicesComponent } from './information-technologyand-services.component';

describe('InformationTechnologyandServicesComponent', () => {
  let component: InformationTechnologyandServicesComponent;
  let fixture: ComponentFixture<InformationTechnologyandServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationTechnologyandServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationTechnologyandServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
