import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourcingOffshoringComponent } from './outsourcing-offshoring.component';

describe('OutsourcingOffshoringComponent', () => {
  let component: OutsourcingOffshoringComponent;
  let fixture: ComponentFixture<OutsourcingOffshoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutsourcingOffshoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutsourcingOffshoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
