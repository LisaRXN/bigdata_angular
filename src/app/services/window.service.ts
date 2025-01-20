import { Injectable, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class WindowService {

  private platformId: object = inject(PLATFORM_ID)
  
  constructor() {}

  get nativeWindow(): Window | null {
    return isPlatformBrowser(this.platformId) ? window : null;
  }

}
