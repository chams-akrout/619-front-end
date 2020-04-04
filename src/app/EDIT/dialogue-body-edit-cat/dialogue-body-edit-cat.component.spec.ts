import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueBodyEditCatComponent } from './dialogue-body-edit-cat.component';

describe('DialogueBodyEditCatComponent', () => {
  let component: DialogueBodyEditCatComponent;
  let fixture: ComponentFixture<DialogueBodyEditCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogueBodyEditCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueBodyEditCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
