import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { User } from './mail-setup.interface';

@Component({
  selector: 'signup-form',
  template: `
    <form novalidate (ngSubmit)="onSubmit(user)" [formGroup]="user">
      <label>
        <span>SMTP Server Host Name</span>
        <input type="text" placeholder="SMTP Server Host Name" formControlName="name">
      </label>
      <div class="error" *ngIf="user.get('name').touched && user.get('name').hasError('required')">
      Host Name is required
      </div>
      <div class="error" *ngIf="user.get('name').touched && user.get('name').hasError('minlength')">
        Minimum of 2 characters
      </div>
      <label>
        <span>SMTP Server Port Number</span>
        <input type="number" placeholder="SMTP Server Port Number" formControlName="port">
      </label>
        <div class="error" *ngIf="user.get('port').touched && user.get('port').hasError('required')">
          Port Number is required
        </div>
        <div class="error" *ngIf="user.get('port').touched && user.get('port').hasError('minlength')">
          Minimum of 4 characters
        </div>
      <div formGroupName="account">
        <label>
          <span>From Email address</span>
          <input type="email" placeholder="From email address" formControlName="email">
        </label>
        <div
          class="error"
          *ngIf="user.get('account').get('email').hasError('required') && user.get('account').get('email').touched">
          Email is required
        </div>
        <label>
          <span>Confirm From address</span>
          <input type="email" placeholder="Confirm from email address" formControlName="confirm">
        </label>
        <div
          class="error"
          *ngIf="user.get('account').get('confirm').hasError('required') && user.get('account').get('confirm').touched">
          Confirming email is required
        </div>
      </div>
      <button type="submit" [disabled]="user.invalid">Save Details</button>
    </form>
  `,
  styleUrls: ['./mail-setup.component.scss'],
  animations: [routerTransition()]
})
export class MailSetupComponent implements OnInit {
  user: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      port: ['', [Validators.required, Validators.minLength(4)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}
