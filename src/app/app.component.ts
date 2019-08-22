import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'my-dream-app';
  rippleInitListener: any;
  rippleMouseDownListener: any;

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.unbindRipple();
  }


  onActivate(event) {
    // this.viewDataService.recoverRouteChange(event);

    // this.configureCalendars(event);

    // this.setFieldFocus();
  }

  onDeactivate(event) {
   // this.viewDataService.registerRouteChange(event);
  }

  unbindRipple() {
    if (this.rippleInitListener) {
      document.removeEventListener('DOMContentLoaded', this.rippleInitListener);
    }
    if (this.rippleMouseDownListener) {
      document.removeEventListener('mousedown', this.rippleMouseDownListener);
    }
  }
}
