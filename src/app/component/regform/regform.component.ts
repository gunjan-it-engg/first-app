import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { FormBuilder, Validators , FormsModule,NgForm } from '@angular/forms';
import { LogdialogService } from 'src/app/services/logdialog.service';
import { DialogRegister} from '../navbar/navbar.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
  hide = true
  
  registerForm : FormGroup;
    name: string='';
    email : string='';
    password : string='';
    IsAccepted:number=0;

    constructor(private fb: FormBuilder , private register: LogdialogService , public dialog: MatDialog ){

      this.registerForm = fb.group({
        'name' : ["" , Validators.required],
        'email' : ["", Validators.compose([Validators.required , Validators.email])],
        'password' :["", Validators.required],
       'IsAccepted':[null]  
      });
    }

    onChange(event:any)  
  {  
    if (event.checked == true) {  
      this.IsAccepted = 1;  
    } else {  
      this.IsAccepted = 0;  
    }  
  } 


  onSubmitting(form:NgForm){
    this.register.getRegister(form).subscribe(data =>{
      if(data){
        this.dialog.closeAll()
      }
      console.log('register response',data)
    })
    console.warn(form)
    console.log( this.registerForm.value)
  }



  ngOnInit(): void {
  }

}
