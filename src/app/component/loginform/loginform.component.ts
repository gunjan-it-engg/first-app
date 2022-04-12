import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , FormBuilder , NgForm } from '@angular/forms';
import { Validators} from '@angular/forms';
import { LogdialogService } from 'src/app/services/logdialog.service';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router'

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  hide = true
  loginForm : FormGroup;
   email: string='';
   password: string='';

  constructor(private fb: FormBuilder , private log: LogdialogService  ,public dialog: MatDialog , private route : Router ) { 
     this.loginForm = fb.group({
      'email' : ["", Validators.compose([Validators.required , Validators.email])],
      'password' : ["" , Validators.required]
    })
  }

  onSubmitting(form:NgForm){
    this.log.getLogin(form).subscribe(data =>{
      if(data){
        this.dialog.closeAll()
        this.route.navigate(['/dash-board'])
      }
      console.log('login response',data)
    })
  }

  ngOnInit(): void {
  }

}
