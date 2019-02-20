import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'two-dropdown',
  templateUrl: './two-dropdown.component.html',
  styleUrls: ['./two-dropdown.component.css']
})
export class TwoDropdownComponent implements OnInit {
fomrGrp : FormGroup = new FormGroup({});
@Input() field:any = {};
@Input() form:FormGroup;
 listsA =["Angular", "React", "JS", "JQuery"];
 listsB =["Master", "Expert", "Intermediate", "Learner"];
  constructor() { 
    this.fomrGrp.addControl('Framework',new FormControl('', Validators.required));
    this.fomrGrp.addControl('Proficiency',new FormControl('', Validators.required));
  }
  onchangeInput(selected : any){
      console.log(selected);
      if(this.fomrGrp.valid){
        console.log(this.fomrGrp.valid);
        this.form.controls[this.field.field_ref].patchValue(this.fomrGrp.value);
      }
  }
  ngOnInit() {

  }
 

}
