import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

const customObject = "Broker__c";
const customObjectFields = [
    "Mobile_Phone__c",
    "Email__c",
    "Title__c",
];

let targetFields = customObjectFields.map((field) => {
    return customObject + "." + field
})



export default class WireGetValue extends LightningElement {
    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: targetFields }) customObject;

    get selectedValues() {
        let values = [];
        values = targetFields.map((field) => {
            return (getFieldValue(this.customObject.data, field));
        })
        return values;
    }

    copiedValues = () => {
        let values = [];
        values = targetFields.map((field) => {
            return (getFieldValue(this.customObject.data, field));
        })
        return values;
    }

    copyValue = () => {
        let copiedValuesArray = targetFields.map((field) => {
            return (getFieldValue(this.customObject.data, field));
        });

        let inp = this.template.querySelector('.dummy-input-record-reader');


        inp.disabled = false;
        inp.value = copiedValuesArray.join("\r\n");
        inp.select();
        document.execCommand('copy');
        inp.disabled = true;
    }

    get firstValue() {
        return getFieldValue(this.customObject.data, targetFields[0]);
    }
}