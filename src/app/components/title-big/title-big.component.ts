import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-title-big',
  imports: [CommonModule],
  templateUrl: './title-big.component.html',
  styleUrl: './title-big.component.css'
})
export class TitleBigComponent {

  isVisible:boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    console.log(window.scrollY)
    this.isVisible = window.scrollY > 150;
  }
}
