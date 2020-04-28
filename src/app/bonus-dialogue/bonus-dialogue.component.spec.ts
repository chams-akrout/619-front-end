import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusDialogueComponent } from './bonus-dialogue.component';

describe('BonusDialogueComponent', () => {
  let component: BonusDialogueComponent;
  let fixture: ComponentFixture<BonusDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
