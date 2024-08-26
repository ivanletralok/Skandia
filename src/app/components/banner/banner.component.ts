import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardText, RecommendationText } from './banner-interface';
import { Subscription } from 'rxjs';
import { CARD_TEXT, RECOMMENDATION_TEXT } from './data/data';
import { BannerService } from './service/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit, OnDestroy {
  recommendationText: RecommendationText = RECOMMENDATION_TEXT;
  cardText: CardText = CARD_TEXT;
  showBanner: boolean = false;
  subscription: Subscription[] = [];

  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {
    this.subscription.push(
      this.bannerService.showBanner$.subscribe((show: boolean) => {
        this.showBanner = show;
      })
    );
  }

  /**
   * destroys the component and its subscriptions.
   */
  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
