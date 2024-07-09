import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationServicesComponent } from './information-services.component';

describe('InformationServicesComponent', () => {
  let component: InformationServicesComponent;
  let fixture: ComponentFixture<InformationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
