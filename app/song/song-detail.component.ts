import {Component, Input} from '@angular/core';
import {Song} from "./song.class";

@Component({
    moduleId: module.id,
    selector: 'song-detail',
    templateUrl: 'song-detail.component.html'
})
export class SongDetailComponent {
    @Input() song:Song;
    @Input() chartSonglist:Song[];
}
