import { Component , AfterViewInit, ViewChild, ChangeDetectorRef , OnInit} from '@angular/core';
// import {} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeService } from 'src/app/services/employe.service';
import {MatDialog} from '@angular/material/dialog';
import { CrudDialogComponent } from '../crud-dialog/crud-dialog.component';


export interface UserData {
  name: string;
  email: string;
  gender: string;
  phone: number;
  country: string;
}


@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements  OnInit {

  displayedColumns: string[] = ['name', 'email', 'gender', 'dob', 'phone' , 'country' , 'actions' ];
  
  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator 
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  
  constructor(public getEmp: EmployeService , public dialog : MatDialog ) {
    // this.getEmp.getEmployee().subscribe(response=>{
    //   this.dataSource = new MatTableDataSource(<any> response)
    // })
  }

  //delete employe warning
  deleteWarning(dataID:any){
    console.log("delete Warning",dataID)
      this.dialog.open(WarningDialog).afterClosed().subscribe(result=>{
        this.getEmployee()
      })
      this.getEmp.setID(dataID) 
  }


  // get the employe table list
  getEmployee(){
    this.getEmp.getEmployee().subscribe({next:(res) =>{
      this.dataSource = new MatTableDataSource(<any> res)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      console.log("crud",res)
    },
    error:(err)=>{
      console.log("crud table",err.message)
    }
  })
  }

  editEmployee(row:any){
    this.dialog.open(CrudDialogComponent , {data : row}).afterClosed().subscribe(val=>{
      if(val == 'update'){
        this.getEmployee()
      }
    })
  }


  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  ngOnInit(): void {
    this.getEmployee()  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




@Component({
  selector: 'warning-dialog',
  templateUrl: './warning-content.html',
  styleUrls: ['./crud-table.component.css']
})
export class WarningDialog {

  constructor(public getEmp: EmployeService , public dialog : MatDialog){}



  // delete employee
  deletingEmployee(){
    this.getEmp.deleteEmployee().subscribe(res=>{
      console.log("delete response found in component",res)
      if(res){
        this.dialog.closeAll()
      }
      
    })
  }
}