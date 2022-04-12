import { Component , OnInit , OnChanges} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LogdialogService } from 'src/app/services/logdialog.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {
  auth : any

  constructor(public dialog: MatDialog , private registerClose:LogdialogService ) { 
  }

  // login dialog 
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // register dialog
  openRegDialog() {
    const dialogRef = this.dialog.open(DialogRegister);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // checking the personally is register or not .
  getAuthenticated():void{
    const user = localStorage.getItem("current_register") || localStorage.getItem("Current_Login")
    if (user){
      this.auth = true
    }
    else {
      this.auth = false
    }
    // this.registerClose.getAuthstate().subscribe((response)=>{
    //   this.auth = response
    // });
  }

  //logout user 
  logOut(){
    this.registerClose.logout()
  }

  ngOnInit():void {
    const user = localStorage.getItem("current_register") || localStorage.getItem("Current_Login")
    if (user){
      this.auth = true
    }
    else {
      this.auth = false
    }
    // this.getAuthenticated()
  }
  
}
  


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content.html',
  styleUrls: ['./form.component.css']
})
export class DialogContentExampleDialog {
  
}

@Component({
  selector:"dialog-content-example-register",
  templateUrl:"dialog-register.html",
  styleUrls: ['./form.component.css']
})
export class DialogRegister{}