import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateTimeFormat'
})
export class DateTimeFormatPipe implements PipeTransform {

  transform(value: string) {
    if (moment(value, moment.ISO_8601).isValid()) {
      console.log('valid date');
    } else {
      console.log('invalid date');
    }
    return value;
  }

}
