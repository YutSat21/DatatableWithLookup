import { LightningElement, api } from 'lwc';
import getPurchaseDetails from '@salesforce/apex/PurchaseDetailCreateTableController.getPurchaseDetails';

const columns = [
  {
    label: '発注先',
    type: 'lookup',
    editable: true,
    fieldName: 'Account__c',
    typeAttributes: {
      objectApiName: 'PurchaseDetail__c',
      fieldName: 'Account__c',
      value: { fieldName: 'Account__c' }
    }
  },
  {
    label: '商品',
    type: 'lookup',
    editable: true,
    fieldName: 'Product__c',
    typeAttributes: {
      objectApiName: 'PurchaseDetail__c',
      fieldName: 'Product__c',
      value: { fieldName: 'Product__c' }
    }
  },
  {
    label: '数量',
    type: 'number',
    fieldName: 'Quantity__c',
    editable: true
  },
  {
    label: '単価',
    type: 'currency',
    fieldName: 'UnitPrice__c',
    editable: true
  },
  {
    label: '金額',
    type: 'currency',
    fieldName: 'Amount__c'
  }
];

export default class CreatePurchaseDetailTable extends LightningElement {
  @api recordId;
  records = [];
  columns = columns;

  async connectedCallback() {
    this.records = await getPurchaseDetails({ parentId: this.recordId });
  }

  handleSave(event) {
    console.log(event.target);
  }
}
