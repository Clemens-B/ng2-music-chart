import {Component, Input } from '@angular/core';
import {FormControl } from '@angular/forms';
import {ValidationService } from './validation.service';

@Component({
    selector: 'error-messages',
    template: `<div *ngIf="errorMessage !== null" class="alert alert-danger">{{errorMessage}}</div>
                <div *ngIf="warningMessage !== null" class="alert alert-warning">{{warningMessage}}</div>`
})
export class ErrorMessagesComponent {
    @Input() control: FormControl;
    mode: string = "dirty";

    get errorMessage() {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.dirty) {
                console.log("Errors: " + JSON.stringify(this.control.errors));
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }
        return null;
    }

    get warningMessage() {
        for (let propertyName in this.control['warnings']) {
            if (this.control['warnings'].hasOwnProperty(propertyName) && this.control.dirty) {
                if(this.control['warnings'][propertyName]){
                    return ValidationService.getValidatorWarningMessage(propertyName);
                }
                // console.log("Warning: " + this.control['warnings'].hasOwnProperty(propertyName))
                // console.log("Warning JSON: " + JSON.stringify(this.control['warnings']))
                // console.log("Property name: " + propertyName)
                // console.log("Property name boolean: " + propertyName + this.control['warnings'][propertyName])
                return null;
            }
        }
        return null;
    }
}