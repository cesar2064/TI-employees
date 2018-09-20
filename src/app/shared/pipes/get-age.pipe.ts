import { Pipe, PipeTransform } from '@angular/core';
declare var moment: any;

@Pipe({
  name: 'getAge'
})
export class GetAgePipe implements PipeTransform {

  transform(value: Date | string): number {
    const date = value instanceof Date ? value : new Date(value);
    return moment().diff(date, 'years');
  }

}
