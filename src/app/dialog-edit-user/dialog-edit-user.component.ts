import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user: any;
  birthdate: Date;
  loading: boolean = false;
  userId: string;
  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditUserComponent>) { 
  }

  ngOnInit(): void {
    this.birthdate = new Date(this.user.birthdate)
  }

  saveUser() {
    this.user.birthdate = this.birthdate.getTime()
    this.loading = true;
    this.firestore
    .collection('saved-users')
    .doc(this.userId)
    .update(this.user.toJSON())
    .then(() => {
      console.log('Updated user succsesful')
      this.loading = false;
      this.dialogRef.close()
    })
  }
}
