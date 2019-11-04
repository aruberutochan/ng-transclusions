import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardByClassComponent } from './card-by-class.component';

describe('CardByClassComponent', () => {
  let component: CardByClassComponent;
  let fixture: ComponentFixture<CardByClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardByClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardByClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
