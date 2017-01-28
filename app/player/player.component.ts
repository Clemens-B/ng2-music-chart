import { Component } from '@angular/core';
import {Song} from "../song/song.class";
import {PlayerService} from "./player.service";
@Component({
    moduleId: module.id,
    selector: 'song-player',
    templateUrl: 'player.component.html'
})

export class SongPlayerComponent {

    private song: Song;
    private audio = new Audio();
    private isPlaying: boolean;
    private currentTime: number;
    private fullTime: number;
    private progress: number;

    constructor(private playerService: PlayerService) {
        playerService.playSong$.subscribe(song => this.onPlaySong(song));
        playerService.currentTime.subscribe(time => this.currentTime = time);
        playerService.fullTime.subscribe(time => this.fullTime = time);
        this.progress = this.currentTime / this.fullTime;
    }

    private onPlaySong(song: Song): void {
        this.song = song;
        console.log("First isPlaying = " + this.isPlaying)
    }

    togglePlay() {
        this.isPlaying = this.playerService.togglePlay();
        console.log("is playing? " + this.isPlaying);
    }





}