import { NgModule } from '@angular/core';
import {PresentationFormComponent} from './components/presentation/form/presentation-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SmartFormComponent} from './components/smart/form/smart-form.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    SmartFormComponent
  ],
  declarations: [
    SmartFormComponent,
    PresentationFormComponent
  ]
})
export class LoginModule { }
