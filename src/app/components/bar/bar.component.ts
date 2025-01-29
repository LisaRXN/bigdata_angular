import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, inject, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { Chart, registerables, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CsvTojsonService } from '../../services/csv-tojson.service';
import { Subscription } from 'rxjs';
import { WindowService } from '../../services/window.service';

Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [],
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})

export class BarComponent implements AfterViewInit {

  chart!: Chart;
  labeldata:string[] = []
  realdata:number[] = []
  colordata:string[] = []
  @Input() chartId:string = ''
  // @Input() colors:string[] = ['#1037de', '#2a3ddf', '#3943e1', '#4649e2', '#504fe3', '#5a55e4', '#625be6', '#6a61e7', '#7267e8', '#796de9', '#8074ea', '#877aec', '#8d80ed', '#9386ee', '#998def', '#9f93f0', '#a599f1', '#aba0f2', '#b0a6f3', '#b6adf4', '#bbb3f5', '#c1baf6', '#c6c0f7', '#cbc7f8', '#d0cdf9', '#d5d4fa', '#dadbfb', '#dfe1fb', '#e4e8fc', '#e9effd']
  @Input() colors:string[] = ['#469f78', '#51a177', '#5ba376', '#64a575', '#6ca774', '#74a973', '#7cab72', '#84ac71', '#8bae70', '#92b06f', '#99b26e', '#a0b46d', '#a7b66c', '#adb86b', '#b4b96a', '#babb68', '#c1bd67', '#c7bf66', '#cec165', '#d4c263', '#dac462', '#e0c660', '#e7c85f', '#edc95e', '#f3cb5c']
  @Input() title:string = ""
  @Input() fileName:string = ""
  @Input() labelRow:string = ""
  @Input() numberRow:string = ""
  @Input() checkbox:boolean = false
  @Input() limit:number = 10

  private platformId: object = inject(PLATFORM_ID)
  csvService = inject(CsvTojsonService)


  setDatas(data:any[]){
    this.labeldata = data.map( (row => row[this.labelRow]))
    this.realdata = data.map( (row => parseInt(row[this.numberRow])))
    this.colordata = data.map( (_, index) => this.colors[index % this.colors.length])
  }

  ngAfterViewInit(): void {
      if (this.chart) {
        this.chart.destroy(); 
      }

      if(this.fileName){
        this.csvService.getDatas(this.fileName).subscribe( 
          (data) => {
            this.setDatas(data)
            this.Renderchart(this.labeldata, this.realdata, this.colordata);  
  
          }
        )
      }
  }
  

  Renderchart(labels: string[], data: number[], colors: string[]): void {

    if (isPlatformBrowser(this.platformId)) {

    if (!labels.length || !data.length || !colors.length) {
      console.warn('Chart data is incomplete');
      return;
    }

    const ctx = document.getElementById(this.chartId) as HTMLCanvasElement;
  
    if (!ctx) {
      console.error('Chart container not found!');
      return;  // Ne pas créer le graphique si l'élément n'existe pas
    }
  
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
  }


  onChangeBox1(e:any){
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

  onChangeBox(e: any): void {
    const checkboxes = document.querySelectorAll('input');
    const arrayBoxes = Array.from(checkboxes);
  
    if (e.target) {
      const limit = parseInt(e.target.name, 10);
      if (limit !== this.limit) {
        this.limit = limit;
        arrayBoxes.forEach(box => (box.name !== e.target.name ? (box.checked = false) : null));
        this.Renderchart(this.labeldata, this.realdata, this.colordata);
      }
    }
  }
  
  


}
