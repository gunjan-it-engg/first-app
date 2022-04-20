import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EmployeService } from 'src/app/services/employe.service';
import { CrudDialogComponent } from '../crud-dialog/crud-dialog.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(public dialog: MatDialog , public empservice : EmployeService) { }

  openDialog() {
    this.dialog.open(CrudDialogComponent).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result == 'save'){
        this.empservice.getEmployee()
      }
    });
  }

  ngOnInit(): void {
  }

}
