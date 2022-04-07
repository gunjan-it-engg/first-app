import { TestBed } from '@angular/core/testing';

import { LogdialogService } from './logdialog.service';

describe('LogdialogService', () => {
  let service: LogdialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogdialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
