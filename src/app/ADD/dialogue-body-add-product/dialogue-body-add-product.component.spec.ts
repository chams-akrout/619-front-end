import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueBodyAddProductComponent } from './dialogue-body-add-product.component';

describe('DialogueBodyAddProductComponent', () => {
  let component: DialogueBodyAddProductComponent;
  let fixture: ComponentFixture<DialogueBodyAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogueBodyAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueBodyAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
