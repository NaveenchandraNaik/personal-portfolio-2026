import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Navigation {
  private scroller = inject(ViewportScroller);

  scrollToSection(elementId: string) {
    // We use a small timeout to ensure the component is rendered 
    // if navigating from a different route.
    setTimeout(() => {
      this.scroller.scrollToAnchor(elementId);
    }, 100);
  }
}
