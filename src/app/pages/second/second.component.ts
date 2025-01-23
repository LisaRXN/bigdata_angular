import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { TableComponent } from "../../components/table/table.component";
import { trigger, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-second',
  imports: [CommonModule, TableComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
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
export class SecondComponent implements AfterViewInit {

  isVisible = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

    // isReady:boolean = false
    // isHidden:boolean = true
    // isVisible:boolean = false 
    // isVisible2:boolean = false 
    // isVisible3:boolean = false 

    // ngOnInit() {
    //   timer(1000).subscribe(()=> (this.isReady = true))
    //   timer(1400).subscribe(() => (this.isHidden = false));
    //   timer(1500).subscribe(() => (this.isVisible = true));
    //   timer(2000).subscribe(() => (this.isVisible2 = true));
    //   timer(2500).subscribe(() => (this.isVisible3 = true));
    //   }

}
