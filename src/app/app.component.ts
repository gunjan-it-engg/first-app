import { Component , OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public constructor( private titleService: Title){
    this.titleService.setTitle('Practice app');
  }

  

  // public setTitle() {
  //   this.titleService.setTitle('newTitle');
  // }

  ngOnInit(): void {
    // this.setTitle()
  }
}
