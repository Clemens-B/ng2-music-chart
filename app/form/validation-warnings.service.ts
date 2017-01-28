import {AbstractControl} from "@angular/forms";
import {SONGS} from "../chart/mock-chart";

export interface AbstractControlWarn extends AbstractControl {
    warnings: any;
}


