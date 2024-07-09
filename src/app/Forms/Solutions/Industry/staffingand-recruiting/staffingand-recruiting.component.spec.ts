import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingandRecruitingComponent } from './staffingand-recruiting.component';

describe('StaffingandRecruitingComponent', () => {
  let component: StaffingandRecruitingComponent;
  let fixture: ComponentFixture<StaffingandRecruitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffingandRecruitingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffingandRecruitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
