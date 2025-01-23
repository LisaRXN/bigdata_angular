import { Injectable } from '@angular/core';
import { animation, style, animate, keyframes, AnimationReferenceMetadata } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }
}



export const fadeInUpAnimation: AnimationReferenceMetadata = animation([
  style({
    visibility: 'hidden'
  }),
  animate('{{ duration }} {{ delay }}', keyframes([
    style({
      visibility: 'visible',
      opacity: 0,
      transform: 'translate3d(0, {{ distance }}, 0)',
      easing: 'ease',
      offset: 0
    }),
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      easing: 'ease',
      offset: 1
    })
  ]))
], {
  params: {
    duration: '1s',
    delay: '300ms',
    distance: '25%'
  }
});