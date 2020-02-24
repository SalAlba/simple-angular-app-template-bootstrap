import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpFacebookComponent } from './sing-up-facebook.component';

describe('SingUpFacebookComponent', () => {
  let component: SingUpFacebookComponent;
  let fixture: ComponentFixture<SingUpFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingUpFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
