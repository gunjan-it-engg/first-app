import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required ]);
  gender = new FormControl('',[Validators.required])

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    if(this.name.hasError('required')){
      return 'you must enter the name'
    }

    if(this.gender.hasError('required')){
      return 'must select the gender'
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
