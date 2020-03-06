import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConsommateurComponent } from './home-consommateur.component';

describe('HomeConsommateurComponent', () => {
  let component: HomeConsommateurComponent;
  let fixture: ComponentFixture<HomeConsommateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConsommateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConsommateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
