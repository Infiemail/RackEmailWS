import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDemoComponent } from './watch-demo.component';

describe('WatchDemoComponent', () => {
  let component: WatchDemoComponent;
  let fixture: ComponentFixture<WatchDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
