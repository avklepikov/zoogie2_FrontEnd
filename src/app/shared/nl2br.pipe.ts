import { Pipe, PipeTransform } from '@angular/core';

//////// CURRENTLY NOT USED, however good stuff

@Pipe({

  name: 'nl2br'

})

export class nl2brPipe implements PipeTransform {

     

  transform(value: string): string {

      return value.replace(/\n/g, '\n\n');

 }

     

}