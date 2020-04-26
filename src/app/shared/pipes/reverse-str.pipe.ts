import { Pipe, PipeTransform } from '@angular/core';
// Made By Dev Chhaniyara

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: any, ...args): any {
    let newString = value;

    newString += '🍪';

    if (args[0] === 'wolf') {
      newString = newString + '🐺';
    }
    else if (args[0] === 'pizza') {
      newString = newString + '🍕';
    }
    else if (args[0] === 'burrito') {
      newString = newString + '🌯';
    }
    if (args[0]) {
      newString = newString + '👻';
    }
    return newString;
  }

}
