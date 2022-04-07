import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  

}
  


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content.html',
  styleUrls: ['./form.component.css']
})
export class DialogContentExampleDialog {
  
}
