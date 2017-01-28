import { Song } from '../song/song.class';

export class Chart
{
    constructor(){
        this.createDate = new Date();
        this.songList = [];

    }

    id:number;
    chartName: string;
    img: string;
    createDate: Date;
    autor: string;
    description: string;

    songList: Song[];

}