import { Component, OnInit } from '@angular/core';
import {
  DATA_SECTION_TEXT,
  DataSectionText,
  HEADER_TEXT,
  HeaderText,
} from './review-constant';

@Component({
  selector: 'app-review-objetive',
  templateUrl: './review-objetive.component.html',
  styleUrls: ['./review-objetive.component.css'],
})
export class ReviewObjetiveComponent implements OnInit {
  /**
   * Texts for the header sections.
   */
  headerText: HeaderText = HEADER_TEXT;

  /**
   * Texts for the data section.
   */
  dataSectionText: DataSectionText = DATA_SECTION_TEXT;
  constructor() {}

  ngOnInit() {}
}
