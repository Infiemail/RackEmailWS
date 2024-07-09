import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BListManagementComponent } from './blist-management.component';

describe('BListManagementComponent', () => {
  let component: BListManagementComponent;
  let fixture: ComponentFixture<BListManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BListManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BListManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
