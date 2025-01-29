import { AfterViewInit, Component, inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Chart, registerables, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CsvTojsonService } from '../../services/csv-tojson.service';
import { isPlatformBrowser } from '@angular/common';

Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-pie',
  imports: [],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent implements AfterViewInit {

  chart!: Chart;

  labeldata:string[] = []
  realdata:number[] = []
  pct:string[] = []
  colordata:string[] = []
  @Input() chartId:string = ''
  // @Input() colors:string[] = ['#4f52ff', '#8c5ce9', '#b268d3', '#cf75bd', '#e983a7', '#68c7cc', '#96cbce', '#bbcecf', '#ddd1d1', '#fcd3d2']
  // @Input() colors:string[] = ['#0015b3', '#3940e0', '#6e68ff', '#a695ff', '#d4c3fc', '#fdb8b5', '#e28684', '#bd5858', '#922e37', '#640114']
  @Input() colors:string[] = ['#87ccdb', '#b5b6bd', '#d49ea0', '#ea8383', '#8bae70', '#c1bd67', '#f3cb5c']
  @Input() title:string = ""
  @Input() fileName:string = ""
  @Input() labelRow:string = ""
  @Input() numberRow:string = ""
  @Input() pctRow:string = ""

    private platformId: object = inject(PLATFORM_ID)
    csvService = inject(CsvTojsonService)

    setDatas(data:any[]){
      this.labeldata = data.map( (row => row[this.labelRow]))
      this.pct = data.map( (row => row[this.pctRow]))
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
          this.Renderchart(this.labeldata, this.realdata, this.colordata, this.pct);  
        }
      )
    }

  }


  Renderchart(labels: string[], data: number[], colors: string[], pct:string[]): void {

    if (isPlatformBrowser(this.platformId)) {
    
    if (this.chart) {
      this.chart.destroy(); 
    }
    
    const ctx = document.getElementById(this.chartId) as HTMLCanvasElement;

    if (!ctx) {
      console.error('Chart container not found!');
      return;  // Ne pas créer le graphique si l'élément n'existe pas
    }
  

    this.chart = new Chart(ctx, {
      type: 'pie',  
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors,
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

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
