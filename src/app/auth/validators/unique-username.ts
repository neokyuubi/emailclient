import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator } from "@angular/forms";
import { catchError, map, of } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn:'root'
})

export class UniqueUsername implements AsyncValidator {

    constructor(private auth:AuthService){}

    validate = (control:AbstractControl) =>
    {
        const username = control.value;
        return this.auth.usernameAvailable(username)
        .pipe(map(()=>{
            return null;
        }),
            catchError((err)=>
            {
                if(err.error.username) 
                {
                    return of({nonUniqueUsername: true});
                }
                else
                {
                    return of({noConnection: true});
                }
                
            })
        );
    }

}
