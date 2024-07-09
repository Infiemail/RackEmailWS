import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumarnResComponent } from './humarn-res.component';

describe('HumarnResComponent', () => {
  let component: HumarnResComponent;
  let fixture: ComponentFixture<HumarnResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumarnResComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HumarnResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
