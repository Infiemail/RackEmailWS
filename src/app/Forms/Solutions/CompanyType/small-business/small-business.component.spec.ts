import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBusinessComponent } from './small-business.component';

describe('SmallBusinessComponent', () => {
  let component: SmallBusinessComponent;
  let fixture: ComponentFixture<SmallBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
