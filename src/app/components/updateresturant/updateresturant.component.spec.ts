import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateresturantComponent } from './updateresturant.component';

describe('UpdateresturantComponent', () => {
  let component: UpdateresturantComponent;
  let fixture: ComponentFixture<UpdateresturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateresturantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateresturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
