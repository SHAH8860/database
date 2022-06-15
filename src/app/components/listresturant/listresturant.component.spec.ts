import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListresturantComponent } from './listresturant.component';

describe('ListresturantComponent', () => {
  let component: ListresturantComponent;
  let fixture: ComponentFixture<ListresturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListresturantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListresturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
