/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SliderService } from './slider.service';
import { SliderResponse } from './model/service-interface';

describe('Service: Slider', () => {
  let service: SliderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SliderService],
    });

    service = TestBed.inject(SliderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data successfully', () => {
    const mockResponse: SliderResponse = {
      listCard: [
        {
          nameProduct: 'Product A',
          numberProduct: '12345',
          balanceProduct: '1000',
          detaildProduct: 'Details about Product A',
        },
        {
          nameProduct: 'Product B',
          numberProduct: '67890',
          balanceProduct: '2000',
          detaildProduct: 'Details about Product B',
        },
      ],
    };

    service.getData().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
