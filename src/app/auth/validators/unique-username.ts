import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidator } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class UniqueUsername implements AsyncValidator {

    constructor(private http:HttpClient){}

    validate = (control:AbstractControl) =>
    {
        const username = control.value;
        return this.http.post<any>('https://api.angular-email.com/auth/username',
        {
            username : username
        }).pipe(map(()=>{
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
