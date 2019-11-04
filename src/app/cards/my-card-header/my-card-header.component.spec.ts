import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardHeaderComponent } from './my-card-header.component';

describe('MyCardHeaderComponent', () => {
  let component: MyCardHeaderComponent;
  let fixture: ComponentFixture<MyCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
