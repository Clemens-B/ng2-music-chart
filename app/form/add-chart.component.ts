import {Component, OnInit, } from "@angular/core";
import {FormService} from "./form.service";
import {FormGroup} from "@angular/forms";
import {Chart} from "../chart/chart.class";

@Component({
    moduleId: module.id,
    selector: 'add-chart',
    templateUrl: 'add-chart.component.html'
})

export class AddChartComponent{

    private stepName: string = 'chart';
    formGroup: FormGroup;

    images = ["play", "glass", "heart", "music", "cloud", "star"];

    constructor(private formservice: FormService){
        this.formGroup = formservice.topLevelFormGroup.controls[this.stepName];
        console.log("formgroup addchart createt")
    };

    onSubmit() {
        console.log("FormGroup: " + JSON.stringify(this.formGroup.value));
        console.log("TopLevel: " + JSON.stringify(this.formservice.topLevelFormGroup.value));
    }
}