import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueBodyAddCatComponent } from './dialogue-body-add-cat.component';

describe('DialogueBodyAddCatComponent', () => {
  let component: DialogueBodyAddCatComponent;
  let fixture: ComponentFixture<DialogueBodyAddCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogueBodyAddCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueBodyAddCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
