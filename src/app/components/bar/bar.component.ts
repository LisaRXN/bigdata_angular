import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Chart, registerables, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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

  @Input() chartId:string = ''
  @Input() labeldata:string[] = []
  @Input() realdata:number[] = []
  @Input() colordata:string[] = []
  @Input() title:string = ""


  ngAfterViewInit(): void {
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
