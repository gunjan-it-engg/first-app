import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  hide = true
  passcode = new FormControl('',[Validators.required])
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if(this.passcode.hasError('required')){
      return 'enter the passcode'
    }

    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
