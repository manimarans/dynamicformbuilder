import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DynamicFormBuilderModule } from '../../custom_modules/dynamic-form-builder/dynamic-form-builder.module';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule , DynamicFormBuilderModule, HttpClientModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
