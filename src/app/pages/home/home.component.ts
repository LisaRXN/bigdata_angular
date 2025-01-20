import { Component, inject } from '@angular/core';
import { TitleBigComponent } from "../../components/title-big/title-big.component";
import { CardHomeComponent } from "../../components/card-home/card-home.component";
import { Router } from '@angular/router';
import { CountupComponent } from "../../components/countup/countup.component";

@Component({
  selector: 'app-home',
  imports: [TitleBigComponent, CardHomeComponent, CountupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  router = inject(Router)

  navigate(){
    this.router.navigate(['first'])
  }


}
