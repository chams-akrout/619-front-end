import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDialogueComponent } from './profile-dialogue.component';

describe('ProfileDialogueComponent', () => {
  let component: ProfileDialogueComponent;
  let fixture: ComponentFixture<ProfileDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
