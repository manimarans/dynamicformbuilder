import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'multi-select',
    templateUrl: './multi-select.component.html',
    styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
    @Input() field: any = {};
    @Input() form: FormGroup;

    selectedOptions = [];
    toggleOptions = false;
    search = '';

    get isValid() { return this.form.controls[this.field.field_ref].valid; }
    get isDirty() { return this.form.controls[this.field.field_ref].dirty; }

    constructor() { }

    ngOnInit() {
        console.log("FIELD", this.field);
        this.field.options.forEach(item => {
            if (this.field.value.indexOf(item.id) != -1) {
                this.addItem(item);
            }
        });
    }

    removeItem(item) {
        this.selectedOptions.splice(this.selectedOptions.indexOf(item), 1);
        this.setValues();
    }

    showOptions() {
        this.toggleOptions = true;
    }

    hideOptions() {
        this.toggleOptions = false;
    }

    onOptionClick(evt, item) {
        evt.target.checked ? this.addItem(item) : this.removeItem(item);
    }

    addItem(item) {
        this.selectedOptions.push(item);
        this.setValues();
    }

    isSelected(option) {
        let selected = false;
        this.selectedOptions.forEach(item => {
            if (item.id == option.id && !selected) {
                selected = true;
            }
        });
        return selected;
    }

    setValues() {
        let values = [];
        this.selectedOptions.forEach(item => {
            values.push(item.id);
        });

        this.form.controls[this.field.field_ref].setValue(values);
    }

    searchOptions(evt){
        this.search = evt.target.value;

    }

}