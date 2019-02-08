import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicForm } from './schema/dynamic-form';
import { Observable } from 'rxjs';

@Component({
  selector: 'dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss']
})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() jsonSchema: Observable<any>;
  dynamicFormSchema: DynamicForm = new DynamicForm();
  form: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit() {
    this.jsonSchema.subscribe(rawSchema => {
      rawSchema.form.forEach(section => {
        section.items.forEach(field => {
          field.schema_details = rawSchema.schemaDetails.properties[field.field_type];
          field.value = rawSchema.data[field.field_ref];
        });
      });

      this.dynamicFormSchema.form = rawSchema.form;

      let fieldsCtrls = {};

      rawSchema.form.forEach((section: any) => {
        section.items.forEach((item: any) => {
          fieldsCtrls[item.field_ref] = new FormControl(item.value || item.default_value, item.required ? Validators.required : Validators.nullValidator)
        });
      });



      this.form = new FormGroup(fieldsCtrls);
    });
  };
}
