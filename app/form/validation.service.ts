import {SONGS} from "../chart/mock-chart";
import {AbstractControlWarn} from "./validation-warnings.service";
export class ValidationService {

    private static readonly filetypes: string[] = ["mp3", "mp4"];

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'maxlength': `Maximum length ${validatorValue.requiredLength}`,
            'invalidChar': `no special characters allowed`,
            'justLetter': `please just use chracters`,
            'invalidFormat': `Format must be mm:ss for example 11:34. Please use numbers as input.`,
            'invalidFile': 'Invalid FileType. Has to be one of' + this.filetypes,
            'invalidUrl': 'Url has to end with a FileType',
        };

        return config[validatorName];
    }

    static getValidatorWarningMessage(validatorName: string) {
        let config = {
            'duplicateTitle': 'Title already exists. Are you sure you want to add it?'
        };

        return config[validatorName];
    }

    static urlValidator(control): any {
        if (control.value) {
            if (control.value.substring(control.value.length - 4, control.value.length - 3) == ".") {
                if (ValidationService.filetypes.indexOf(control.value.substring(control.value.lastIndexOf(".") + 1)) > -1) {
                    return null;
                } else {
                    return {'invalidFile': true};
                }
            } else {
                return {'invalidUrl': true};
            }
        } else {
            return null;
        }
    }

    static soundlenghtValidator(control): any {
        if (control.value) {//need this. Otherwise form.reset() would trigger the Validator
            if (control.value.match(/[0-9][0-9]:[0-9][0-9]/)) {
                return null;
            }
            else {
                return {'invalidFormat': true};
            }
        }
    }


    static specialCharValidator(control): any {
        if (control.value) {
            if (control.value.match(/^[a-zA-Z0-9\s-]+$/)) {
                return null;
            }
            else {
                return {'invalidChar': true};
            }
        }
    }

    static duplicatetitle(control: AbstractControlWarn) {
        if (!control.value) {
            return null;
        }
        let songs = SONGS;
        let allTitles = [];
        let i;
        for (i = 0; i < songs.length; i++) {
            console.log("Title: " + songs[i].title);
            allTitles.push(String(songs[i].title))
        }

        if (allTitles.indexOf(control.value) > -1) {
            control.warnings = {'duplicateTitle': true};
            return null;
        } else {
            control.warnings = {'duplicateTitle': false}
            return null;
        }
    }

    static justLetterValidator(control): any {
        if (control.value) {
            if (control.value.match(/^[a-zA-Z\s]+$/)) {
                return null;
            }
            else {
                return {'justLetter': true};
            }
        }
    }
}
