import { Component, OnInit } from '@angular/core';
import {CountService} from "../../count.service"

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public counterService: CountService) { }
  public getCount(){
    return this.counterService.count
  }
  public incCount(){
    this.counterService.count += 1;
  }

  public descCount(){
    this.counterService.count -= 1;
  }
  ngOnInit(): void {
  }

}
