import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-second',
  imports: [CommonModule, TableComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class SecondComponent implements OnInit {

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
