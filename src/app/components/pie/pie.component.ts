import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart, registerables, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-pie',
  imports: [],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent implements AfterViewInit  {

  chart!: Chart;

  @Input() chartId:string = ''
  @Input() labeldata:string[] = []
  @Input() realdata:number[] = []
  @Input() colordata:string[] = []
  @Input() pct:string[] = []
  @Input() title:string = ""


  ngAfterViewInit(): void {
    if (typeof document !== 'undefined' && this.chartId) {
      this.Renderchart(this.labeldata, this.realdata, this.colordata, this.pct);
    }
  }

  Renderchart(labels: string[], data: number[], colors: string[], pct:string[]): void {
    const ctx = document.getElementById(this.chartId) as HTMLCanvasElement;

    if (this.chart) {
      this.chart.destroy(); 
    }

    this.chart = new Chart(ctx, {
      type: 'pie',  // Changez ici en 'pie' pour le graphique en camembert
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
            font: {
              size: 18, 
              weight: 'normal'
            },
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  }

}
