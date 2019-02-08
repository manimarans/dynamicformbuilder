import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'textbox',
    templateUrl: './textbox.component.html',
    styleUrls:['./textbox.component.scss']
})
export class TextBoxComponent implements OnInit {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.field_ref].valid; }
    get isDirty() { return this.form.controls[this.field.field_ref].dirty; }
  
    constructor() {

    }

    ngOnInit(){
      
    }
}