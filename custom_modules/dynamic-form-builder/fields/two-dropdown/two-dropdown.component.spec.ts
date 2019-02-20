import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDropdownComponent } from './two-dropdown.component';

describe('TwoDropdownComponent', () => {
  let component: TwoDropdownComponent;
  let fixture: ComponentFixture<TwoDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
