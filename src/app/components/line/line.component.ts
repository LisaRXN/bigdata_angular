import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, inject, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Chart, registerables, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CsvTojsonService } from '../../services/csv-tojson.service';

Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-line',
  imports: [],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent implements AfterViewInit {

  chart!: Chart;



  labeldata:string[] = []
  realdata:number[] = []
  realdata2:number[] = []
  colors:string[] = ['#469f78', '#ea8383']
  @Input() chartId:string = ''
  @Input() title:string = ""
  @Input() fileName:string = ""
  @Input() labelRow:string = ""
  @Input() numberRow:string = ""
  @Input() numberRow2:string = ""
  
  private platformId: object = inject(PLATFORM_ID)
  csvService = inject(CsvTojsonService)


  setDatas(data:any[]){
    this.labeldata = data.map( (row => row[this.labelRow]))
    this.realdata = data.map( (row => parseInt(row[this.numberRow])))
    this.realdata2 = data.map( (row => parseInt(row[this.numberRow2])))
  }

  ngAfterViewInit(): void {
    if (this.chart) {
      this.chart.destroy(); 
    }
    if(this.fileName){
      this.csvService.getDatas(this.fileName).subscribe( 
        (data) => {
          this.setDatas(data)
          this.Renderchart(this.labeldata, this.realdata, this.realdata2, this.colors);
        }
      )
    }
  }

  Renderchart(labels: string[], data: number[], data2: number[], colors: string[]): void {
    
    if (isPlatformBrowser(this.platformId)) {

    const ctx = document.getElementById(this.chartId) as HTMLCanvasElement;

    if (this.chart) {
      this.chart.destroy(); 
    }

    if (!ctx) {
      console.error('Chart container not found!');
      return;  // Ne pas créer le graphique si l'élément n'existe pas
    }
  

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
          data: data,
          borderColor: colors[0], 
          label: 'Regular Visitors'
        },
          {
          data: data2,
          borderColor: colors[1], 
          label: 'Unique Visitors'
        }
      ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: { enabled: true },
          datalabels: { display: false },
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

}
