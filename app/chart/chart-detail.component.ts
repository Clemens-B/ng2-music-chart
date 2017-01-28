import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Chart} from "./chart.class";
import {Song} from "../song/song.class";
import {PlayerService} from "../player/player.service";


@Component({
    moduleId: module.id,
    selector: 'chart-detail',
    templateUrl: 'chart-detail.component.html'
})
export class ChartDetailComponent {
    @Input() chart: Chart;

    constructor(private playService: PlayerService) { }

    songs: Song[];
    selectedSong: Song;

    onPlay(song: Song): void {
        this.playService.playSong(song);
        console.log("this is " + song);
    }

    onSelect(song: Song): void {
        this.selectedSong = song;
    }
}
