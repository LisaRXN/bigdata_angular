import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-number',
  imports: [CommonModule],
  templateUrl: './home-number.component.html',
  styleUrl: './home-number.component.css'
})
export class HomeNumberComponent {

  @Input() backgroundColor:string = ''
  @Input() numberColor:string = ''
  @Input() number:string = ''
  @Input() text:string = ''

}
