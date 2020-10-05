import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CounterResponse } from '../../models/counter.model';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-counter-increment-dialog',
  templateUrl: './counter-increment-dialog.component.html',
  styleUrls: ['./counter-increment-dialog.component.scss']
})
export class CounterIncrementDialogComponent implements OnInit {

  counter$: Observable<CounterResponse>;

  constructor(private _applicationService: ApplicationService, private _dialogRef: MatDialogRef<CounterIncrementDialogComponent>) { }

  ngOnInit(): void {
    this.counter$ = this._applicationService.incrementCounter();
  }

  close(counter: number) {
    this._dialogRef.close(counter);
  }

}
