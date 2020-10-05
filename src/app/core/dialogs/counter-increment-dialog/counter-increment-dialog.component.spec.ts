import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterIncrementDialogComponent } from './counter-increment-dialog.component';

describe('CounterIncrementDialogComponent', () => {
  let component: CounterIncrementDialogComponent;
  let fixture: ComponentFixture<CounterIncrementDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterIncrementDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterIncrementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
