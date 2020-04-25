import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: any, ...args): any {
    let newString = value;
    if (args[0]) {
      newString += '🐺';
    }
    if (args[1] === 'singleQuote') {
      newString = args[1] + newString;
    }
    else if (args[1] === 'doubleQuotes') {
      newString = '"' + newString;
    }
    return newString;
  }

}
