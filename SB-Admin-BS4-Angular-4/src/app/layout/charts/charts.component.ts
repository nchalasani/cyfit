import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    
    public  gaugeOptionsPeople: any = {
        valuePercent: .65,
        bandColor: ['#56bf36', '#ff9c04', '#f03333'],
        bandPercent: [.5, .75, .1],
        minValue: 0,
        maxValue: 100,
        unit: 'Percentage',
        maintainAspectRatio: false
      };

      public  gaugeOptionsOS: any = {
        valuePercent: .50,
        bandColor: ['#56bf36', '#ff9c04', '#f03333'],
        bandPercent: [.5, .75, .1],
        minValue: 0,
        maxValue: 100,
        unit: 'Percentage',
        maintainAspectRatio: false
      };

      public  gaugeOptionsSoftware: any = {
        valuePercent: .35,
        bandColor: ['#56bf36', '#ff9c04', '#f03333'],
        bandPercent: [.5, .75, .1],
        minValue: 0,
        maxValue: 100,
        unit: 'Percentage',
        maintainAspectRatio: false
      };

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: true,
        responsive: true,
       // maintainAspectRatio: false
    };
    public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Software' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'People' },
        { data: [18, 38, 60, 39, 46, 97, 70], label: 'OS' }
    ];
    // Doughnut
    public doughnutChartLabels: string[] = ['Software', 'People', 'OS'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';
    public doughnutChartOptions: any = {
        responsive: true,
        maintainAspectRatio: false
    };
    // Radar
    public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string = 'radar';
    // Pie
    public pieChartLabels: string[] = ['Software', 'People', 'OS'];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';
    public pieChartOptions: any = {
        responsive: true,
        maintainAspectRatio: false
    };
    // PolarArea
    public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean = true;

    public polarAreaChartType: string = 'polarArea';
    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40, 80, 74, 22, 53, 99, 87, 68,34, 80, 81, 56, 55, 40, 80, 74, 22, 53, 99], label: 'Internal Risk % last 15 days' }
        //,
       // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
       // { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    public lineChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14','15','16', '17', '18', '19', '20', '21', '22', '23', '24','25'];
    public lineChartOptions: any = {
        responsive: true,
        //maintainAspectRatio: false
    };
    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(116,156,224,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
      /*   { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        } */
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

    constructor() {
    }

    ngOnInit() {
    }
}
