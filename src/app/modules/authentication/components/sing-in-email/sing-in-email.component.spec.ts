import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInEmailComponent } from './sing-in-email.component';

describe('SingInEmailComponent', () => {
  let component: SingInEmailComponent;
  let fixture: ComponentFixture<SingInEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingInEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
