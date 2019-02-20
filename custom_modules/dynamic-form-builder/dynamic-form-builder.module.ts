import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './fields/textbox/textbox.component';
import { RadioComponent } from './fields/radio/radio.component';
import { MultiSelectComponent } from './fields/multi-select/multi-select.component';
import { TwoDropdownComponent } from './fields/two-dropdown/two-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    RadioComponent,
    MultiSelectComponent,
    TwoDropdownComponent

  ],
  exports: [DynamicFormBuilderComponent],
  providers: []
})
export class DynamicFormBuilderModule { }
