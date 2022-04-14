import { Component , OnInit , OnChanges} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LogdialogService } from 'src/app/services/logdialog.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {
  public auth: boolean = true
  activatedRoute: ActivatedRoute | null | undefined;

  

  constructor(public dialog: MatDialog , private registerClose:LogdialogService , public route : Router) {  
    this.getAuthenticated()
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

  // checking the user login from service
  getAuthenticated():void{
    this.registerClose.getAuthstate().subscribe((data)=>{
      this.auth = data
      console.log(this.auth)
      console.log(data)
    })
  }

  //logout user 
  logOut(){
    this.registerClose.logout()
    this.route.navigate([''])
  }

  ngOnInit():void { 
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