import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardByComponentComponent } from './card-by-component.component';

describe('CardByComponentComponent', () => {
  let component: CardByComponentComponent;
  let fixture: ComponentFixture<CardByComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardByComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardByComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
