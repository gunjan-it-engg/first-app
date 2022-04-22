import { Component , OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public constructor( private titleService: Title , public route : Router){
    this.titleService.setTitle('Practice app');
    if(!navigator.onLine){
      this.route.navigate(['/noInternet'])
    }
  }

  

  // public setTitle() {
  //   this.titleService.setTitle('newTitle');
  // }

  ngOnInit(): void {
    if(navigator.onLine){
      this.route.navigate(['/dash-board'])
    }
    // this.setTitle()
  }
}
