import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightPercentage'
})
export class HighlightPercentagePipe implements PipeTransform {

  transform(value: string, highlightClass: string = 'text-orange-400 font-bold'): string {
    if (!value) return value;

    const percentageRegex = /(?<percentage>\d+%)(?<remainingText>\d*)/g;
    return value.replace(percentageRegex, (match, percentage, remainingText) => {
      return `<span class="${highlightClass}">${percentage}</span>${remainingText}`;
    });
  }
}
