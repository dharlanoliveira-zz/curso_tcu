import {Directive, ElementRef, HostListener} from '@angular/core';
import {FormControl, FormControlName} from '@angular/forms';
import {element} from 'protractor';

@Directive({
  selector: '[to-upper]'
  /*selector: 'input[to-upper]'*/
})
export class ToUpperDirective {

  constructor(public element: ElementRef) {
  }

  @HostListener('keyup')
  public onInputChange() {
    let valor = this.element.nativeElement.value;
    this.element.nativeElement.value = valor.toUpperCase();
  }

}
