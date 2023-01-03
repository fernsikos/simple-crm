import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  hide = true;
  @ViewChild('loginForm') loginform: NgForm;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.authService.SignIn(this.loginform.value.userName, this.loginform.value.userPassword)
    
  }

}

// (click)="authService.SignIn(userName.value, userPassword.value)"