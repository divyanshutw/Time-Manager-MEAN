
import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
    ]
})
export class EqualValidator implements Validator {
    
    constructor( @Attribute('validateEqual') public validateEqual: string) {}

    validate(abstractControl: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        let value = abstractControl.value;

        // control value (e.g. password)
        let e = abstractControl.root.get(this.validateEqual);

        // value not equal
        if (e && value !== e.value) return {
            validateEqual: false
        }
        return [];
    }
}