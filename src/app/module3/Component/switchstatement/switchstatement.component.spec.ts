import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchstatementComponent } from './switchstatement.component';

describe('SwitchstatementComponent', () => {
  let component: SwitchstatementComponent;
  let fixture: ComponentFixture<SwitchstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchstatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
