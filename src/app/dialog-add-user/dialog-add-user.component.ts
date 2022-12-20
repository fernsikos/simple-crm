import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthdate: Date;
  loading: boolean = false;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthdate = this.birthdate.getTime()
    this.loading = true;
    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result:any) => {
        console.log('Added user succsesful', result)
        this.dialogRef.close()
      })
  }

  

}
