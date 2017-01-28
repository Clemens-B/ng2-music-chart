import { Injectable } from '@angular/core';
import {Chart} from "./chart.class";
import {CHARTS, SONGS} from "./mock-chart";
import {Song} from "../song/song.class";

@Injectable()
export class ChartService {

    charts = CHARTS;

    songs = SONGS;

    getChart(): Promise<Chart[]> {
        return Promise.resolve(this.charts);
    }

    addChart(chart){
        this.charts.push(chart);
    }

    addSong(song) {
        this.songs.push(song);
    }

    getSongs() {
        return this.songs;
    }

    deleteSong(song)
    {
        var  index = this.songs.indexOf(song);
        this.songs.splice(index,1);
    }
}