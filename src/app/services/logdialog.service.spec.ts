import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LogdialogService } from './logdialog.service';
import {HttpClientModule} from '@angular/common/http';  

describe('LogdialogService', () => {
  let service: LogdialogService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogdialogService);
    imports : [HttpClientTestingModule]
    providers:[LogdialogService]
  });

  it('should be created', () => {
    const service: LogdialogService = TestBed.get(LogdialogService)
    expect(service).toBeTruthy();
  });
});
