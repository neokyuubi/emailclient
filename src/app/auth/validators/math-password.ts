import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, Validator } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class MathPassword implements Validator {
    validate(form:AbstractControl)
    {
        const {password, passwordConfirmation} = form.value;
        if(password == passwordConfirmation)
        {
            return null;
        }
        else
        {
            return {"passwordsDontMatch" : true}
        }
    }
}
