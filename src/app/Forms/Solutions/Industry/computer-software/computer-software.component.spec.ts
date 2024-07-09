import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerSoftwareComponent } from './computer-software.component';

describe('ComputerSoftwareComponent', () => {
  let component: ComputerSoftwareComponent;
  let fixture: ComponentFixture<ComputerSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerSoftwareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
