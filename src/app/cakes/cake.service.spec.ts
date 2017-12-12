import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CakeService } from './cake.service';

describe('CakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CakeService]
    });
  });

  it('should be created', inject([CakeService], (service: CakeService) => {
    expect(service).toBeTruthy();
  }));
});
