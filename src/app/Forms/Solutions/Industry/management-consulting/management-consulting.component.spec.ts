import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementConsultingComponent } from './management-consulting.component';

describe('ManagementConsultingComponent', () => {
  let component: ManagementConsultingComponent;
  let fixture: ComponentFixture<ManagementConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementConsultingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
