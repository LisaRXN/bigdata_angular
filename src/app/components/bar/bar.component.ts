import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, inject, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { Chart, registerables, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CsvTojsonService } from '../../services/csv-tojson.service';
import { Subscription } from 'rxjs';

Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [],
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})

export class BarComponent implements OnInit, AfterViewInit {

  chart!: Chart;
  labeldata:string[] = []
  realdata:number[] = []
  colordata:string[] = []
  @Input() chartId:string = ''
  @Input() colors:string[] = ['#1037de', '#2a3ddf', '#3943e1', '#4649e2', '#504fe3', '#5a55e4', '#625be6', '#6a61e7', '#7267e8', '#796de9', '#8074ea', '#877aec', '#8d80ed', '#9386ee', '#998def', '#9f93f0', '#a599f1', '#aba0f2', '#b0a6f3', '#b6adf4', '#bbb3f5', '#c1baf6', '#c6c0f7', '#cbc7f8', '#d0cdf9', '#d5d4fa', '#dadbfb', '#dfe1fb', '#e4e8fc', '#e9effd']
  @Input() title:string = ""
  @Input() fileName:string = ""
  @Input() labelRow:string = ""
  @Input() numberRow:string = ""
  @Input() checkbox:boolean = false
  @Input() limit:number = 10


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

  setDatas(data:any[]){
    this.labeldata = data.map( (row => row[this.labelRow]))
    this.realdata = data.map( (row => parseInt(row[this.numberRow])))
    this.colordata = data.map( (_, index) => this.colors[index % this.colors.length])
  }

  ngAfterViewInit(): void {
    if (this.chart) {
      this.chart.destroy(); 
    }
    if (typeof document !== 'undefined' && this.chartId) {
      this.Renderchart(this.labeldata, this.realdata, this.colordata);
    }
  }

  Renderchart(labels: string[], data: number[], colors: string[]): void {
    const ctx = document.getElementById(this.chartId) as HTMLCanvasElement;
  
    if (this.chart) {
      this.chart.destroy(); 
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels.slice(0, this.limit),
        datasets: [{
          data: data.slice(0, this.limit),
          backgroundColor: colors.slice(0, this.limit),
          label:""
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: { enabled: true },
          datalabels: { display: false },
          title: {
            display: true, 
            text: this.title, 
            font: {
              size: 18, 
              weight: 'normal'
            },
          }
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  }


  onChangeBox(e:any){
    const ckeckboxes = document.querySelectorAll('input')
    const arrayBoxes = Array.from(ckeckboxes)

    if (e.target) {

      if (e.target.name === "10" && e.target.checked) {
        console.log(e.target.name )
        this.limit = 10
        arrayBoxes.map( box =>  box.name !== "10" ? box.checked = false : null)
        this.Renderchart(this.labeldata, this.realdata, this.colordata);
      }

      else if (e.target.name === "25" && e.target.checked) {
        console.log(e.target.name )
        arrayBoxes.map( box =>  box.name !== "25" ? box.checked = false : null)
        this.limit = 25
        this.Renderchart(this.labeldata, this.realdata, this.colordata);
      }
    
}
}

}
