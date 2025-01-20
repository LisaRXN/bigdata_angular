import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { WindowService } from './services/window.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'data_angular2';

  private router = inject(Router)
  private windowService = inject(WindowService)

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
    
    if(nextSection){
      scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });
    }
  }

}
