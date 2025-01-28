import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { BarComponent } from '../../components/bar/bar.component';
import { DoughnutComponent } from '../../components/doughnut/doughnut.component';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-third',
  imports: [CommonModule, BarComponent, DoughnutComponent],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
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
export class ThirdComponent implements AfterViewInit {

  isVisible = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  
}
