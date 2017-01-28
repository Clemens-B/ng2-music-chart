import {Component, EventEmitter} from "@angular/core";
import {ChartService} from "../chart/chart.service";
import {FormGroup, AbstractControl} from "@angular/forms";
import {FormService} from "./form.service";
import {Song} from "../song/song.class";

@Component({
    moduleId: module.id,
    selector: 'add-song',
    templateUrl: 'add-songs.component.html'
})

export class AddSongComponent{

    private stepName: string = 'songlist';
    formGroup: FormGroup;
    topLevelFormGroup: FormGroup;
    chart:any;
    songs: Song[];

    constructor(private formservice: FormService, private chartService: ChartService){
        this.formGroup = formservice.topLevelFormGroup.controls[this.stepName];
        this.chart = formservice.topLevelFormGroup.controls["chart"].value;
        this.topLevelFormGroup = formservice.topLevelFormGroup;
    };

    onSubmit(song) {
        this.chart.songList.push(song);

        this.chartService.addSong(song);
        this.songs = this.chartService.getSongs();
        this.formGroup.reset();
    }

    deleteSong(song)
    {
        var index = this.chart.songList.indexOf(song);
        this.chart.songList.splice(index,1);

        this.chartService.deleteSong(song);
    }

    addChart(value) {
        this.chartService.addChart(value);
        this.formservice.topLevelFormGroup.reset(
            {"chart":{"createDate": new Date(),"songList":[]}}
        );
    }

    deleteSong(song)
    {
        var index = this.chart.songList.indexOf(song);
        this.chart.songList.splice(index,1);
        this.chartService.deleteSong(song);
    }

}