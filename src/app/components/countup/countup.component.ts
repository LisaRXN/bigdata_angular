import { AfterViewInit, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-countup',
  imports: [],
  templateUrl: './countup.component.html',
  styleUrl: './countup.component.css'
})
export class CountupComponent implements AfterViewInit {
  
  @Input() startValue: number = 0;
  @Input() endValue: number = 1000;
  @Input() duration: number = 3;

  num: number = 0; // Valeur affichée
  interval!: any;


  ngAfterViewInit() {
    this.startCountUp();
  }
  

  startCountUp() {

    const animationDuration = this.duration * 1000; // Convertir en millisecondes
    const frameRate = 30; // Images par seconde
    const totalFrames = animationDuration / frameRate; // Nombre total d'étapes
    const increment = Math.round((this.endValue - this.startValue) / totalFrames); // Incrément arrondi

    this.num = this.startValue; // Initialise la valeur affichée
    let currentFrame = 0;

    this.interval = setInterval(() => {
      currentFrame++;
      this.num = Math.min(
        this.startValue + increment * currentFrame,
        this.endValue
      ); // Limite à la valeur finale

      if (currentFrame >= totalFrames) {
        clearInterval(this.interval); // Arrête l'animation
        this.num = this.endValue; // Assure la valeur finale exacte
      }
    }, frameRate);
  }
    
  

}
