import {AbstractControl} from '@angular/forms';
let badWords=[
    'idiot',
    'hell',
    'slap',
    'stupid'
];
export function badWordsFilter(a:AbstractControl):{[key:string]:boolean}{
  //  console.log(a.value);
    if(badWords.includes(a.value))
    return{'bad':true}
    else{
      return {'bad':false}
    }
}
