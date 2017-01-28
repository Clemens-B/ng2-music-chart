/**
 * Created by Samy on 04.01.2017.
 */
import { Pipe, PipeTransform } from '@angular/core';
import {mapChildrenIntoArray} from "@angular/router/src/url_tree";

/*
 * Tranforms a number in minute:seconds
 * Usage:
 *   seconds | soundLength
 * Example:
 *   {{ time |  soundLength}}
 *
 */
@Pipe({name: 'soundLength' ,pure: true})
export class SoundLengthPipe implements PipeTransform {

    transform(time: string): any {

        let duration = ""

        if(!!time)
        {
            let minutes = Math.floor(parseInt(time)/60);
            if (minutes < 10) duration = "0"+minutes
                else duration = ""+minutes
            let seconds = parseInt(time) % 60;
            if (seconds < 10) duration = duration+":0"+seconds
                else duration = duration+":"+seconds

            return duration;
        }
        return duration;
    }
}