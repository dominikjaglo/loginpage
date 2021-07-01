import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginPayloadModel} from './login-payload.model';

@Component({
  selector: 'app-presentation-form',
  templateUrl: './presentation-form.component.html',
  styleUrls: ['./presentation-form.component.scss']
})
export class PresentationFormComponent {
   public readonly loginForm: FormGroup;

   @Output() submitted = new EventEmitter<LoginPayloadModel>();

   public constructor() {
     this.loginForm = new FormGroup({
       email: new FormControl(null, Validators.email),
       password: new FormControl(null, Validators.minLength(6))
     });
   }

  public submit(): void {
    if (this.loginForm.touched && this.loginForm.status === 'VALID') {
      this.submitted.emit(this.loginForm.value);
     }
  }

  public hasError(field: string): boolean {
     const errors = this.getErrors(field);
     if (null === errors) {
       return false;
     }

     const hasError = Object.keys(errors).find(errorField => errorField === field);

     return hasError !== null ? true : false;
  }

  public getErrors(field: string) {
     if (false === this.loginForm.get(field)?.touched) {
        return null;
     }

     if (!!this.loginForm.get(field)?.errors) {
       return this.loginForm.get(field)?.errors as {[s: string]: string};
     }

     return  null;
  }

  public isSubmitEnabled(): boolean {
    return false === this.loginForm.touched || this.loginForm.status !== 'VALID';
  }
}
