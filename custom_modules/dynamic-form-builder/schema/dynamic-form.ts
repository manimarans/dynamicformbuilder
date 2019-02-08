import { FormSection } from './form-section';
import { FieldSchema } from './field-schema';

export class DynamicForm {
    schemaDetails:FieldSchema = new FieldSchema();
    form: Array<FormSection> = new Array<FormSection>();
    data:any;
}