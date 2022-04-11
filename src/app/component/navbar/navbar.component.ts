import { Component , OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LogdialogService } from 'src/app/services/logdialog.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {

  constructor(public dialog: MatDialog , private registerClose:LogdialogService ) { 
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openRegDialog() {
    const dialogRef = this.dialog.open(DialogRegister);
      // this.registerClose.getAuthstate().subscribe(data=>{
      //   if(data){
      //     dialogRef.close()
      //   }
      // })
      
    
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    
  
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