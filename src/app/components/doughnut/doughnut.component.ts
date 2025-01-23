import { AfterViewInit, Component, inject, Input, OnInit } from '@angular/core';
import { Chart, registerables, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CsvTojsonService } from '../../services/csv-tojson.service';

Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-doughnut',
  imports: [],
  templateUrl: './doughnut.component.html',
  styleUrl: './doughnut.component.css'
})
export class DoughnutComponent implements AfterViewInit, OnInit {

  chart!: Chart;

  labeldata:string[] = []
  realdata:number[] = []
  pct:string[] = []
  colordata:string[] = []
  @Input() chartId:string = ''
  @Input() colors:string[] = ['#0015b3', '#3940e0', '#6e68ff', '#a695ff', '#d4c3fc', '#fdb8b5', '#e28684', '#bd5858', '#922e37', '#640114']
  @Input() title:string = ""
  @Input() fileName:string = ""
  @Input() labelRow:string = ""
  @Input() numberRow:string = ""
  @Input() pctRow:string = ""

    csvService = inject(CsvTojsonService)
  
    ngOnInit(): void {
      if(this.fileName){
        this.csvService.getDatas(this.fileName).subscribe( 
          (data) => {
            this.setDatas(data)
          }
        )
      }
    }

  ngAfterViewInit(): void {
    if (this.chart) {
      this.chart.destroy(); 
    }
    if (typeof document !== 'undefined' && this.chartId) {
      this.Renderchart(this.labeldata, this.realdata, this.colordata, this.pct);
    }
  }


  setDatas(data:any[]){
    this.labeldata = data.map( (row => row[this.labelRow]))
    this.pct = data.map( (row => row[this.pctRow]))
    this.realdata = data.map( (row => parseInt(row[this.numberRow])))
    this.colordata = data.map( (_, index) => this.colors[index % this.colors.length])
  }


  Renderchart(labels: string[], data: number[], colors: string[], pct:string[]): void {
    const ctx = document.getElementById(this.chartId) as HTMLCanvasElement;

    if (this.chart) {
      this.chart.destroy(); 
    }

    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors,
          label: 'Sales'
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { 
            display: true,
            position: 'right'
          },
          tooltip: { enabled: true },
          datalabels: {
            formatter: (value, ctx) => {
              const index = ctx.dataIndex;
              return pct[index]; 
            },
            color: '#fff', 
            font: {
              weight: 'bold',
              size: 14
            }
          },
          title: {
            display: true, 
            text: this.title, 
            padding:20,
            font: {
              size: 18, 
              weight: 'normal',
            },
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  }

}
