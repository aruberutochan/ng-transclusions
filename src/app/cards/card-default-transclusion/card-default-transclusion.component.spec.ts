import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDefaultTransclusionComponent } from './card-default-transclusion.component';

describe('CardDefaultTransclusionComponent', () => {
  let component: CardDefaultTransclusionComponent;
  let fixture: ComponentFixture<CardDefaultTransclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDefaultTransclusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDefaultTransclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
