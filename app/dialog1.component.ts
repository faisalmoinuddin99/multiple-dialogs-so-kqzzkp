import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Dialog2Component } from './dialog2.component';

@Component({
  selector: 'dialog1',
  templateUrl: './dialog1.component.html'
})
export class Dialog1Component  {
  constructor(public dialog: MatDialog) { }

    openDialog() {
      const dialogRef = this.dialog.open(Dialog2Component, {
        //id: 'dialog2'
      });

      console.log(dialogRef);
    }
}
