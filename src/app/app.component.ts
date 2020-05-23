import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public showGoToTop: boolean = false;

  // Window Scroll Event Listener
  @HostListener('window:scroll', ['$event'])
  onScrollEvent() {
    this.showGoToTop = window.pageYOffset > 250;
  }

  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


}
