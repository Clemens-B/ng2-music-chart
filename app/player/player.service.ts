import {Injectable, EventEmitter} from '@angular/core';
import {Song} from "../song/song.class";
import {Subject} from "rxjs/Subject";

@Injectable()
export class PlayerService {

    public playSong$: EventEmitter<Song>;
    public audio = new Audio();
    public currentTime: Subject<number> = new Subject<number>();
    public fullTime: Subject<number> = new Subject<number>();

    constructor() {
        this.playSong$ = new EventEmitter();
    }

    public playSong(song: Song) {
        this.audio.src = song.url;
        console.log("Url: " + song.url);
        this.audio.load();
        this.audio.play();
        this.audio.onloadedmetadata = () => {
            this.fullTime.next(
                this.audio.duration
            );
        };
        this.audio.ontimeupdate = () => {
            this.currentTime.next(
                this.audio.currentTime
            );
        };
        this.playSong$.emit(song);
    }

    public togglePlay(): boolean {
        if (this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
        return this.audio.paused;
    }

}