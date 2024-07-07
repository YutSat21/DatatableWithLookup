import { LightningElement, api } from 'lwc';

export default class DatatableLookup extends LightningElement {
  @api objectApiName;
  @api fieldName;
  @api value;

  connectedCallback() {
    console.log('aaaa');
    console.log(this.objectApiName);
    console.log(this.fieldName);
    console.log(this.value);
  }
}
