import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  // Private BehaviorSubject to track the banner visibility state
  private showBannerSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor() {}

  /**
   * @returns An Observable<boolean> that emits the current banner visibility state.
   */
  get showBanner$(): Observable<boolean> {
    return this.showBannerSubject.asObservable();
  }

  /**
   * Updates the banner visibility state.
   * @param show - A boolean value indicating whether the banner should be shown (true) or hidden (false).
   */
  toggleBanner(show: boolean): void {
    this.showBannerSubject.next(show);
  }
}
