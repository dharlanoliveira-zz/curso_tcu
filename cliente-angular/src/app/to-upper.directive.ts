import {Directive, ElementRef, HostListener} from '@angular/core';
import {FormControl, FormControlName} from '@angular/forms';

@Directive({
  selector: '[formControlName][to-upper]',
  providers: [FormControlName]
})
export class ToUpperDirective {

  constructor(public element: ElementRef, public formControlName: FormControlName) {
  }

  @HostListener('(keyup)')
  public onInputChange() {
    console.log('oi')
    const formControl: FormControl = this.formControlName.control;
    formControl.setValue(formControl.value.toString().toUpperCase());
  }

}
