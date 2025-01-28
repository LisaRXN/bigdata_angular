import { AfterViewInit, Component, HostListener, inject, OnInit } from '@angular/core';
import { TitleBigComponent } from "../../components/title-big/title-big.component";
import { CardHomeComponent } from "../../components/card-home/card-home.component";
import { Router } from '@angular/router';
import { CountupComponent } from "../../components/countup/countup.component";
import { CommonModule } from '@angular/common';
import { CardMenuComponent } from "../../components/card-menu/card-menu.component";
import { HomeNumberComponent } from "../../components/home-number/home-number.component";

@Component({
  selector: 'app-home',
  imports: [TitleBigComponent, CountupComponent, CommonModule, CardMenuComponent, HomeNumberComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isVisible:boolean = false;
  private observer!: IntersectionObserver;

  router = inject(Router)
  page:string = "home"


  navigate(page:string){
    this.router.navigate([page])
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {

    const element = document.getElementById('question');
    let windowHeight = window.innerHeight

    if(element){
      const elementY = element.offsetTop - windowHeight
      this.isVisible = window.scrollY > elementY - 100;
    }


  }

}
