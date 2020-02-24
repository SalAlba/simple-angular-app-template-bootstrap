import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInFacebookComponent } from './sing-in-facebook.component';

describe('SingInFacebookComponent', () => {
  let component: SingInFacebookComponent;
  let fixture: ComponentFixture<SingInFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingInFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
