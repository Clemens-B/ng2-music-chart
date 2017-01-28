
import {Chart} from "./chart.class";
import {Song} from "../song/song.class";


export const SONGS:Song[] = [
    {title: "Shape Of You", interpret: "Ed Sheeran", album: "Album1", genre: "Pop", url: "public/songs/01-Prelude.mp3", soundLength: "01:12", relaseDate: new Date(1990, 1, 8), position: 1},
    {title: "Bad and Boujee", interpret: "Migos", album: "Album1", genre: "Rock", url: "public/songs/01-Prelude.mp3", soundLength: "03:14", relaseDate: new Date(1998, 5, 12), position: 2},
    {title: "Black Beatles", interpret: "Rae Sremmurd Feat. Gucci Mane", album: "Album1", genre: "Techno", url: "public/songs/01-Prelude.mp3", soundLength: "21:12", relaseDate: new Date(1999, 1, 7), position: 3},
    {title: "Starboy", interpret: "The Weeknd Feat. Daft Punk", album: "Album1", genre: "Techno", url: "public/songs/01-Prelude.mp3", soundLength: "21:12", relaseDate: new Date(1999, 1, 7), position: 3},

    {title: "Closer", interpret: "The Chainsmokers Feat. Halsey", album: "Album1", genre: "Techno", url: "public/songs/01-Prelude.mp3", soundLength: "21:12", relaseDate: new Date(1999, 1, 7), position: 3},
    {title: "Castle On The Hill", interpret: "Ed Sheeran", album: "Album1", genre: "Techno", url: "public/songs/01-Prelude.mp3", soundLength: "21:12", relaseDate: new Date(1999, 1, 7), position: 3},
    {title: "24K Magic", interpret: "Bruno Mars", album: "Album1", genre: "Techno", url: "public/songs/01-Prelude.mp3", soundLength: "21:12", relaseDate: new Date(1999, 1, 7), position: 3},
    {title: "Don't Wanna Know", interpret: "Maroon 5 Feat. Kendrick Lamar", album: "Album1", genre: "Techno", url: "public/songs/01-Prelude.mp3", soundLength: "21:12", relaseDate: new Date(1999, 1, 7), position: 3},
    {title: "Side To Side", interpret: "Ariana Grande Feat. Nicki Minaj", album: "Album1", genre: "Techno", url: "public/songs/01-Prelude.mp3", soundLength: "21:12", relaseDate: new Date(1999, 1, 7), position: 3},
    {title: "Bad Things", interpret: "Machine Gun Kelly & Camila Cabello", album: "Album1", genre: "Techno", url: "public/songs/01-Prelude.mp3", soundLength: "21:12", relaseDate: new Date(1999, 1, 7), position: 3},
    {title: "Song1", interpret: "Interpret1", album: "Album1", genre: "Techno", url: "public/songs/01-Prelude.mp3", soundLength: "01:12", relaseDate: new Date(1990, 1, 8), position: 1},

    ];

export const CHARTS:Chart[] = [
    {
        id: 0, chartName: "Januar Top10", img: "glass", createDate: new Date(2017, 1, 25), autor: "Clemens", description: "US-Single Charts aus Januar 2017",
        songList: [SONGS[0], SONGS[1], SONGS[2],SONGS[3],SONGS[4],SONGS[5],SONGS[6],SONGS[7],SONGS[8],SONGS[9],]
    },
    {
        id: 1, chartName: "All Time Favs", img: "heart", createDate: new Date(2016, 12, 1), autor: "Samed", description: "All Time Lieblingssongs :)",
        songList: [SONGS[0], SONGS[1], SONGS[2]]
    },
    {
        id: 2, chartName: "Januar Top Rock", img: "music", createDate: new Date(2017, 1, 16), autor: "Elvis", description: "Das Rockt!!",
        songList: [SONGS[1], SONGS[2]]
    }
];