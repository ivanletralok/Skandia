import { catchError, map, of, take } from 'rxjs';
import { SliderService } from './slider.service';
import {
  Component,
  AfterViewInit,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BannerService } from '../banner/service/banner.service';
import { SliderData } from './model/service-interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SliderComponent implements OnInit, AfterViewInit {
  cards: SliderData[] = [];
  scrollPosition: number = 0;
  cardWidth: number = 0;
  isPrevDisabled: boolean = true;
  isNextDisabled: boolean = false;
  constructor(
    private sliderService: SliderService,
    private bannerService: BannerService
  ) {}

  ngOnInit(): void {
    this.sliderService
      .getData()
      .pipe(
        take(1),
        map((response: { listCard: SliderData[] }) => {
          return (response.listCard || []).map((item) => ({
            ...item,
            icon: this.getIconForProduct(item.nameProduct),
          }));
        }),
        catchError((error) => {
          return of([]); // Return an empty array in case of error
        })
      )
      .subscribe((data: SliderData[]) => (this.cards = data));
  }

  /**
   * Toggles the banner visibility when the button is clicked.
   * @param {void}
   */
  onButtonClick(): void {
    this.bannerService.toggleBanner(true);
  }

  /**
   * Lifecycle hook that is called after the component's view has been fully initialized.
   * It calculates the width of a card element and updates the state of navigation buttons.
   */
  ngAfterViewInit(): void {
    this.cardWidth = document.querySelector('.flex-none')?.clientWidth || 0;
    this.updateButtonStates();
  }

  /**
   * Generates a CSS transform string to translate the slider's position horizontally.
   * @returns {string} The transform string representing the horizontal translation.
   */
  getTransform(): string {
    return `translateX(-${this.scrollPosition}px)`;
  }

  /**
   * Moves the slider to the previous set of cards by adjusting the scroll position.
   * Ensures that the scroll position does not go below zero and updates button states.
   */
  prevSlide(): void {
    this.scrollPosition -= this.cardWidth;
    if (this.scrollPosition < 0) {
      this.scrollPosition = 0;
    }
    this.updateButtonStates();
  }

  /**
   * Moves the slider to the next set of cards by adjusting the scroll position.
   * Ensures that the scroll position does not exceed the maximum scroll limit and updates button states.
   */
  nextSlide(): void {
    const maxScroll = (this.cards.length - 1) * this.cardWidth;
    this.scrollPosition += this.cardWidth;
    if (this.scrollPosition > maxScroll) {
      this.scrollPosition = maxScroll;
    }
    this.updateButtonStates();
  }

  /**
   * Updates the states of the previous and next navigation buttons based on the current scroll position.
   * Disables the 'Previous' button if at the start and the 'Next' button if at the end.
   */
  updateButtonStates(): void {
    const maxScroll = (this.cards.length - 1) * this.cardWidth;
    this.isPrevDisabled = this.scrollPosition === 0;
    this.isNextDisabled = this.scrollPosition === maxScroll;
  }

  /**
   * Returns an icon based on the product name.
   * @param productName Name of the product.
   * @returns URL or name of the icon.
   */
  getIconForProduct(productName: string): string {
    const iconMap: { [key: string]: string } = {
      MFUND: '/assets/img/Happy.svg',
      CREA: '/assets/img/Trofeo.svg',
      FICS: '/assets/img/Handheart.svg',
      BOLT: '/assets/img/Happy.svg',
    };

    return iconMap[productName] || 'assets/img/Happy.svg';
  }
}
