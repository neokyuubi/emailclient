import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidator } from "@angular/forms";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class UniqueUsername implements AsyncValidator {

    constructor(private http:HttpClient){}

    validate = (control:AbstractControl) =>
    {
        const username = control.value;
        console.log(username);
        
        return of(null);
    }

}
