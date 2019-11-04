import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardByAttributeComponent } from './card-by-attribute.component';

describe('CardByAttributeComponent', () => {
  let component: CardByAttributeComponent;
  let fixture: ComponentFixture<CardByAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardByAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardByAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
