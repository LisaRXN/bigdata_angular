import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { BarComponent } from '../../components/bar/bar.component';
import { DoughnutComponent } from '../../components/doughnut/doughnut.component';

@Component({
  selector: 'app-third',
  imports: [CommonModule, BarComponent, DoughnutComponent],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
 
})
export class ThirdComponent implements OnInit {

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
