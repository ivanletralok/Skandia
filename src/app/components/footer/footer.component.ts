import { Component, OnInit } from '@angular/core';
import { FOOTER_TEXT, FooterText } from './footer-constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  /**
   * Texts for the footer sections.
   */
  footerText: FooterText = FOOTER_TEXT;
  constructor() {}

  ngOnInit() {}
}
