import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempSignUpComponent } from './temp-sign-up.component';

describe('TempSignUpComponent', () => {
  let component: TempSignUpComponent;
  let fixture: ComponentFixture<TempSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
