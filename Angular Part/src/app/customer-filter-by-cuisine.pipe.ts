import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerFilterByCuisine'
})
export class CustomerFilterByCuisinePipe implements PipeTransform {

  transform(items: any[], searchText: string, fieldName: string): any {
    if (!items) { return [] }

    if (!searchText) { return items }

    return items.filter((item: any) => {
      if (item && item.cuisine[fieldName]) {
        return item.cuisine[fieldName].toLowerCase().includes(searchText);
      }

      return false;


    })

  }

}
