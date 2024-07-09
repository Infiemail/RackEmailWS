import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlimitedEmailAccountsComponent } from './unlimited-email-accounts.component';

describe('UnlimitedEmailAccountsComponent', () => {
  let component: UnlimitedEmailAccountsComponent;
  let fixture: ComponentFixture<UnlimitedEmailAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlimitedEmailAccountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnlimitedEmailAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
