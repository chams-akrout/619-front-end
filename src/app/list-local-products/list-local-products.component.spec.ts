import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocalProductsComponent } from './list-local-products.component';

describe('ListLocalProductsComponent', () => {
  let component: ListLocalProductsComponent;
  let fixture: ComponentFixture<ListLocalProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLocalProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLocalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
