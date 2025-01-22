import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Chart, registerables, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-line',
  imports: [],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent implements AfterViewInit {

  chart!: Chart;

  @Input() chartId:string = ''

  labeldata: string[] = ['Monday', 'Thusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
  realdata:number[] = [562388, 552505, 439399, 411314, 401903, 427295, 420070];
  realdata2:number[] = [145979, 150965, 139601, 134859, 132307, 133821, 128717];
  colordata: string[] = ['#4f52ff', '#ff928f'];


  ngAfterViewInit(): void {
    if (typeof document !== 'undefined' && this.chartId) {
      this.Renderchart(this.labeldata, this.realdata, this.realdata2, this.colordata);
    }
  }
  Renderchart(labels: string[], data: number[], data2: number[], colors: string[]): void {
    const ctx = document.getElementById(this.chartId) as HTMLCanvasElement;

    if (this.chart) {
      this.chart.destroy(); 
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
          data: data,
          borderColor: '#4f52ff', 
          label: 'Regular Visitors'
        },
          {
          data: data2,
          borderColor: '#ff928f', 
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
