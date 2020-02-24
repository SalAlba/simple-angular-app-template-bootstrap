import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpEmailComponent } from './sing-up-email.component';

describe('SingUpEmailComponent', () => {
  let component: SingUpEmailComponent;
  let fixture: ComponentFixture<SingUpEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingUpEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
