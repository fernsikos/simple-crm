import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-veryfy-email',
  templateUrl: './veryfy-email.component.html',
  styleUrls: ['./veryfy-email.component.scss']
})
export class VeryfyEmailComponent implements OnInit {

  constructor(    public authService: AuthService
    ) { }

  ngOnInit(): void {
  }

}
