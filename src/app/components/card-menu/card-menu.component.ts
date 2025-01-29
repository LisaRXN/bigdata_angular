import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-menu',
  imports: [CommonModule],
  templateUrl: './card-menu.component.html',
  styleUrl: './card-menu.component.css'
})
export class CardMenuComponent {

  private router = inject(Router)

  @Input() page:string = ''
  @Input() title:string = ''
  @Input() text:string = ''
  @Input() color:string = ''
  @Input() titleColor:string = ''
  @Input() image:string = ''

  navigate(page:string){
    this.router.navigate([page])
  }

}
