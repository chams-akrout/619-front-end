import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponDialogueComponent } from './coupon-dialogue.component';

describe('CouponDialogueComponent', () => {
  let component: CouponDialogueComponent;
  let fixture: ComponentFixture<CouponDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
