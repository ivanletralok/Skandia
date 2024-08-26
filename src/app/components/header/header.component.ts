import { Component, OnInit } from '@angular/core';
import { HEADER_TEXT, HeaderText } from './header-constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sidebarOpen = false;
  /**
   * Texts for the header sections.
   */
  headerText: HeaderText = HEADER_TEXT;

  constructor() {}

  ngOnInit() {}
}
