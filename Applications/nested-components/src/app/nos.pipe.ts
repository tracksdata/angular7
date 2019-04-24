import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class NosPipe implements PipeTransform {

  transform(base: number, expo: number): number {
    return Math.pow(base,expo);
  }

}
