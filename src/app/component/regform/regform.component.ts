import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { FormBuilder, Validators , FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
  registerForm : FormGroup;
    name: string='';
    email : string='';
    gender : string='';
    IsAccepted:number=0;

    constructor(private fb: FormBuilder){

      this.registerForm = fb.group({
        'name' : ["" , Validators.required],
        'email' : ["", Validators.compose([Validators.required , Validators.email])],
        'gender' :["", Validators.required],
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
    console.warn(form)
    console.log( this.registerForm.value)
  }



  ngOnInit(): void {
  }

}
