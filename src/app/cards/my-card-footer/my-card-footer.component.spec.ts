import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardFooterComponent } from './my-card-footer.component';

describe('MyCardFooterComponent', () => {
  let component: MyCardFooterComponent;
  let fixture: ComponentFixture<MyCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
