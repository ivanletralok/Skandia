import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SliderResponse } from './model/service-interface';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  private apiUrl: string =
    'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private http: HttpClient) {}

  /**
   * Fetches data from the API.
   * @returns An Observable of SliderData array.
   */
  getData(): Observable<SliderResponse> {
    return this.http.get<SliderResponse>(this.apiUrl);
  }
}
