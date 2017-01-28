import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'time'
})
export class TimePipe {
    transform(value: number){
        var minutes = Math.floor(value / 60);
        var seconds = Math.floor(value - minutes * 60);
        var minStr = minutes > 9 ? minutes.toString() : '0' + minutes.toString();
        var secStr = seconds > 9 ? seconds.toString() : '0' + seconds.toString();
        return minStr + ':' + secStr;
    }
}