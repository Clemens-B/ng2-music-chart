import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Chart} from "./chart/chart.class";
import {ChartService} from "./chart/chart.service";
import {Song} from "./song/song.class";


@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    charts:Chart [];
    selectedChart: Chart;

    constructor(private chartService: ChartService) { }

    getChart(): void {
        this.chartService.getChart().then(charts => this.charts = charts);
    }



    ngOnInit():void {
        this.getChart();
    }
    onSelect(charts:Chart):void {
        this.selectedChart = charts;
    }
}