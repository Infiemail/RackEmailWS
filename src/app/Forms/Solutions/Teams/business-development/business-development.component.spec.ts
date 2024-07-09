import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDevelopmentComponent } from './business-development.component';

describe('BusinessDevelopmentComponent', () => {
  let component: BusinessDevelopmentComponent;
  let fixture: ComponentFixture<BusinessDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
