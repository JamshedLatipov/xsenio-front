import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CounterIncrementDialogComponent } from 'src/app/core/dialogs/counter-increment-dialog/counter-increment-dialog.component';
import { CounterResponse } from 'src/app/core/models/counter.model';
import { ApplicationService } from 'src/app/core/services/application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counter: CounterResponse;

  constructor(private _applicationService: ApplicationService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this._applicationService.getCounter().subscribe(data => {
      this.counter = data;
    });
  }

  increment() {
    this._dialog.open(CounterIncrementDialogComponent, {
      disableClose: true
    })
      .afterClosed()
      .subscribe((counter: number) => {
        this.counter.counter = counter;
      });

  }
}
