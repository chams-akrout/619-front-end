import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueBodyEditProductComponent } from './dialogue-body-edit-product.component';

describe('DialogueBodyEditProductComponent', () => {
  let component: DialogueBodyEditProductComponent;
  let fixture: ComponentFixture<DialogueBodyEditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogueBodyEditProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueBodyEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
