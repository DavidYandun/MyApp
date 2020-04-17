import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamarcasComponent } from './listamarcas.component';

describe('ListamarcasComponent', () => {
  let component: ListamarcasComponent;
  let fixture: ComponentFixture<ListamarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListamarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
