import { Component, OnInit } from '@angular/core';
import {
  FIRST_SECTION_TEXT,
  FirstSectionText,
  SECOND_SECTION_TEXT,
  SecondSectionText,
} from './objective-constant';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css'],
})
export class ObjectiveComponent implements OnInit {
  /**
   * Texts for the first section of the component.
   */
  firstSectionText: FirstSectionText = FIRST_SECTION_TEXT;

  /**
   * Texts for the second section of the component.
   */
  secondSectionText: SecondSectionText = SECOND_SECTION_TEXT;

  constructor() {}

  ngOnInit() {}
}
