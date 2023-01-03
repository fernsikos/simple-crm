import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  @ViewChild('forgotPasswordForm') forgotPasswordForm: NgForm;

  constructor(public authService: AuthService) { }
  public email = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit(): void {
  }

   resentPassword() {
    this.authService.ForgotPassword(this.forgotPasswordForm.value.passwordResetEmail)
    console.log('test')
   }
}
