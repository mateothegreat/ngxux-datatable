import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxDatatableComponent } from './ngxux-datatable.component';

describe('NgxuxDatatableComponent', () => {
  let component: NgxuxDatatableComponent;
  let fixture: ComponentFixture<NgxuxDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
