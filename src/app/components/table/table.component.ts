import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() items: string[] = []
  @Input() numbers: number[] = []
  @Input() firstTitle: string = ""
  @Input() secondTitle: string = ""

}
