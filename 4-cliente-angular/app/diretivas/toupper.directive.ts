import {Directive, Renderer, ElementRef, HostListener} from "@angular/core";
import {NgModel, FormControl, FormControlName} from "@angular/forms";

/**
 * Created by Dharlan on 16/01/2017.
 */

@Directive({
    selector: '[formControlName][to-upper]',
    providers: [FormControlName],
    host: {
        '(keyup)' : 'toupper()'
    }
})
export class ToUpper{

    constructor(public element:ElementRef, public formControlName:FormControlName){

    }

    toupper() {
        let formControl:FormControl = this.formControlName.control;
        formControl.setValue(formControl.value.toString().toUpperCase());
    }

}
