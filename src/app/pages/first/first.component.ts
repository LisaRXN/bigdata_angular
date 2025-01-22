import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { BarComponent } from "../../components/bar/bar.component";
import { PieComponent } from "../../components/pie/pie.component";
import { LineComponent } from "../../components/line/line.component";
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';
import { trigger, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-first',
  imports: [BarComponent, PieComponent, LineComponent, CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]

})
export class FirstComponent implements OnInit {

  isReady:boolean = false
  isHidden:boolean = true
  isVisible:boolean = false
  isVisible2:boolean = false 
  isVisible3:boolean = false 


  ngOnInit() {
    timer(1000).subscribe(()=> (this.isReady = true))
    timer(1400).subscribe(() => (this.isHidden = false));
    timer(1500).subscribe(() => (this.isVisible = true));
    timer(2000).subscribe(() => (this.isVisible2 = true));
    timer(2500).subscribe(() => (this.isVisible3 = true));
    }

}
