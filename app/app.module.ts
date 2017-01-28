import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { DatePickerModule } from 'ng2-datepicker';
import {AppComponent}   from './app.component';
import {ChartDetailComponent} from "./chart/chart-detail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SongDetailComponent} from "./song/song-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {ChartService} from "./chart/chart.service";
import {RouterModule} from "@angular/router";
import {AddChartComponent} from "./form/add-chart.component";
import {HashLocationStrategy, LocationStrategy } from '@angular/common';
import {SoundLengthPipe} from "./utils/sound-length.pipe"
import {AddSongComponent} from "./form/add-songs.component";
import {FormService} from "./form/form.service";
import {ErrorMessagesComponent} from "./form/error-message.component";
import {ValidationService} from "./form/validation.service";
import {DndModule} from "ng2-dnd";
import {AbstractControlWarn} from "./form/validation-warnings.service";
import {SongPlayerComponent} from "./player/player.component";
import {PlayerService} from "./player/player.service";
import {TimePipe} from "./utils/time.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        DatePickerModule,
        DndModule.forRoot(),
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: "addchart",
                component: AddChartComponent
            },
            {
                path: "addsong",
                component: AddSongComponent
            },
            {
                path: "dashboard",
                component: DashboardComponent
            },
            {
                path: '**',
                redirectTo: '/dashboard'
            }
        ])
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        AddChartComponent,
        AddSongComponent,
        ErrorMessagesComponent,
        ChartDetailComponent,
        SongDetailComponent,
        SongPlayerComponent,
        TimePipe,
        SoundLengthPipe
    ],
    providers: [
        ChartService,
        ValidationService,
        FormService,
        PlayerService,
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
