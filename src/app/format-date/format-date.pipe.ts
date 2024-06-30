import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string): any {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      const datePipe = new DatePipe('en-US');
      return datePipe.transform(date, 'HH:mm:ss MMM dd yyyy');
    }
    return value;
  }
}
