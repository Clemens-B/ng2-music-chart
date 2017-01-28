import {Injectable, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Chart} from "../chart/chart.class";
import {ValidationService} from "./validation.service";



@Injectable()
export class FormService {

    public topLevelFormGroup;
    public chart:any;

    constructor() {
        console.log("contstructor called")
        this.topLevelFormGroup = new FormGroup({
            chart: new FormGroup({
                chartName: new FormControl("", Validators.compose([
                    Validators.minLength(5),Validators.required,Validators.maxLength(20)
                ])),
                img: new FormControl("", Validators.compose([
                    Validators.required
                ])),
                createDate: new FormControl(new Date().toISOString().slice(0, 10), Validators.compose([
                    Validators.required
                ])),
                autor: new FormControl("", Validators.compose([
                    Validators.required,ValidationService.specialCharValidator
                ])),
                description: new FormControl("", Validators.compose([
                    Validators.minLength(10),Validators.required, ValidationService.specialCharValidator
                ])),
                songList: new FormControl([])//we could also do .addControl in add-songs.ts
            }),
            songlist: new FormGroup({
                title: new FormControl('', Validators.compose([
                    Validators.required,Validators.maxLength(20),ValidationService.specialCharValidator, ValidationService.duplicatetitle
                ])),
                interpret: new FormControl('', Validators.compose([
                    Validators.required,Validators.maxLength(20),ValidationService.specialCharValidator
                ])),
                album: new FormControl('', Validators.compose([
                    Validators.required,Validators.maxLength(20),ValidationService.specialCharValidator
                ])),
                genre: new FormControl('', Validators.compose([
                    Validators.required,Validators.maxLength(20),ValidationService.justLetterValidator
                ])),
                soundLength: new FormControl('', Validators.compose([
                        Validators.required, ValidationService.soundlenghtValidator
                ])),
                relaseDate: new FormControl(''),
                url: new FormControl('', ValidationService.urlValidator),
            }),
        });
    }


}