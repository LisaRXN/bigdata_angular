import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-home',
  imports: [],
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.css'
})
export class CardHomeComponent {

  @Input() image: string = "/img/img.png"
  @Input() title: string = "Titre"
  @Input() number: number = 0

}
