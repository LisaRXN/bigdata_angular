import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit,} from '@angular/core';
import { BarComponent } from '../../components/bar/bar.component';
import { PieComponent } from '../../components/pie/pie.component';
import { LineComponent } from '../../components/line/line.component';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [BarComponent, PieComponent, LineComponent, CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('fadeInOnLoad', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)'}),
        animate('0.5s 0.3s', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ])
  ],
})
export class FirstComponent implements AfterViewInit, OnInit {
  
  isVisible = false;
  
  ngOnInit(): void {
    this.isVisible = false;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

}
