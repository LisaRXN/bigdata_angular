import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit,} from '@angular/core';
import { BarComponent } from '../../components/bar/bar.component';
import { PieComponent } from '../../components/pie/pie.component';
import { LineComponent } from '../../components/line/line.component';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';
import { After } from 'v8';

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
        animate('0.5s 1.5s', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('fadeInOnLoad2', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)'}),
        animate('0.5s 2s', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('fadeInOnLoad3', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)'}),
        animate('0.5s 2.5s', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),

  ],
})
export class FirstComponent implements AfterViewInit, OnInit {
  
  isVisible = false;
    private viewChecked = false; // Indicateur pour éviter des changements multiples
  
  ngOnInit(): void {
    this.isVisible = false;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

}
