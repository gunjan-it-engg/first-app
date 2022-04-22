import { Component, Inject, OnInit } from '@angular/core';
import {FormControl , FormGroup , FormBuilder , NgForm } from '@angular/forms';
import { Validators} from '@angular/forms';
import { ActivatedRoute, Router , UrlTree} from '@angular/router'
import { MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeService } from 'src/app/services/employe.service';


@Component({
  selector: 'app-crud-dialog',
  templateUrl: './crud-dialog.component.html',
  styleUrls: ['./crud-dialog.component.css']
})
export class CrudDialogComponent implements OnInit {

  btnText : string = "Add"
  hide = true
  employeForm : FormGroup;
   name: string='';
   email: string='';
   lastName: string='';   
  


  constructor(private fb: FormBuilder , public dialog:MatDialogRef<CrudDialogComponent> , public postEmp: EmployeService , @Inject(MAT_DIALOG_DATA) public editData : any) {
    this.employeForm = fb.group({
      'name':["",Validators.required],
      'lastName':["",Validators.required],
      'email' : ["", Validators.compose([Validators.required , Validators.email])],
      'gender':["", Validators.required],
      'dob':["",Validators.required],
      'phone' :["", Validators.compose([Validators.required , Validators.pattern("[0-9 ]{10}") , Validators.maxLength(10)])],
      'address':["", Validators.required],
      'salary':["",Validators.required],
      'state':["",Validators.required],
      'country':["",Validators.required],
      'city':["",Validators.required]
    })

    if(this.editData){
      this.btnText = "Edit"
      this.employeForm.controls['name'].setValue(this.editData.name)
      this.employeForm.controls['lastName'].setValue(this.editData.lastName)
      this.employeForm.controls['email'].setValue(this.editData.email)
      this.employeForm.controls['gender'].setValue(this.editData.gender)
      this.employeForm.controls['dob'].setValue(this.editData.dob)
      this.employeForm.controls['phone'].setValue(this.editData.phone)
      this.employeForm.controls['address'].setValue(this.editData.address)
      this.employeForm.controls['salary'].setValue(this.editData.salary)
      this.employeForm.controls['state'].setValue(this.editData.state)
      this.employeForm.controls['country'].setValue(this.editData.country)
      this.employeForm.controls['city'].setValue(this.editData.city)
    }
   }

   // providing form core data
   gender : any = [
     {name : "Male"},
     {name : "Female"},
     {name:"Transgender"},
     {name:"other"},
   ]

   onSubmitting(form:NgForm){
     if (!this.editData){
       this.postEmp.postEmployee(form).subscribe(data =>{
           this.dialog.close('save') 
         console.log('add response',data)
       })
     } else {
        this.editEmployee()
     }
  }

  editEmployee( ){
    this.postEmp.editEmployee(this.editData._id,this.employeForm.value ).subscribe({
      next:(res)=>{
        alert("sucess edit")
        this.employeForm.reset();
        this.dialog.close('update');
      },
      error:()=>{
        alert("error in edit")
      }
    })
  }
  
  ngOnInit(): void {
    console.log(this.editData)
  }

}
