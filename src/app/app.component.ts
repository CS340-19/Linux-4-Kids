import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {fadeAnimation} from './animations';
import {
  fader
} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  // animation triggers go here
]
})

export class AppComponent {
  title = 'linux4Kids';

  sideOpen: boolean = false;

  prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
}
