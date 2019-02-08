import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'field-builder',
  templateUrl: './field-builder.component.html',
  styleUrls: ['./field-builder.component.scss']
})
export class FieldBuilderComponent implements OnInit {
  @Input() field:any;
  @Input() form:any;
  
  get isValid() { return this.form.controls[this.field.field_ref].valid; }
  get isDirty() { return this.form.controls[this.field.field_ref].dirty; }

  constructor() { }

  ngOnInit() {
    console.log(this.field);
  }

}
