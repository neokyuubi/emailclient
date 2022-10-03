import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { Email, EmailService } from './email.service';

@Injectable({
  providedIn: 'root'
})

export class EmailResolverService implements Resolve<Email> {

  constructor(private emailService:EmailService, private route:ActivatedRoute) { }

  resolve()
  {
    return this.emailService.getEmail(this.route.snapshot.params['id']);
  }
}
