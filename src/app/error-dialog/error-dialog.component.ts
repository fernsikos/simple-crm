import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  public errorMessage: string ;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string, public dialogRef: MatDialogRef<ErrorDialogComponent>) {
    
    this.errorMessage = data.toString().substring(25, 81);
    
    console.log(typeof(this.errorMessage))
    console.log(this.errorMessage)

   }

  ngOnInit(): void {
  }

}
