import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, EMPTY, of, tap } from 'rxjs';
import { Email, EmailService } from './email.service';

@Injectable({
  providedIn: 'root'
})

export class EmailResolverService implements Resolve<Email> {

  constructor(private emailService:EmailService, private router:Router) { }

  resolve(route : ActivatedRouteSnapshot, state:RouterStateSnapshot)
  {
    return this.emailService.getEmail(route.params.id)
    .pipe(catchError((er) => {
      this.router.navigateByUrl('/inbox/not-found');
      return EMPTY;
    }));
  }
}
