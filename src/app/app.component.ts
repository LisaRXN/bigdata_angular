import { Component, HostListener, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { WindowService } from './services/window.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'data_angular2';

  private router = inject(Router)
  private windowService = inject(WindowService)
  isMenuOpen:boolean = false;
  endPage:boolean = false;

  ngOnInit():void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        const nativeWindow = this.windowService.nativeWindow;
        if(nativeWindow){
          nativeWindow.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    })
  }

  goToSection(){
    const sections = document.querySelectorAll('section')
    const sectionsArray = Array.from(sections);
    const nextSection = sectionsArray.find( section => section.offsetTop > window.scrollY )
    
    if(this.endPage){
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    else if(nextSection){
      scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });
    }
  }

    @HostListener('window:scroll', ['$event'])
    onScroll() {
      let positionY = window.scrollY
      let pageHeight = document.documentElement.scrollHeight;
      let windowHeight = window.innerHeight

      if(positionY > pageHeight-windowHeight-200){
        this.endPage = true
      }else{
        this.endPage = false
      }
    }
  

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateHome(): void{
    this.router.navigate(['home'])
  }

  navigate(page:string ){
    this.router.navigate([page])
  }

}
