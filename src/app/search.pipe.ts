import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Post} from './post';


@Pipe({
  name: 'search'
})
@Injectable()
export class SearchPipe implements PipeTransform {

  transform (items: Post[], value: string): Post[] {

    // @ts-ignore
    return value ? items.filter(item => item.userId == value) : items;

  }

}
