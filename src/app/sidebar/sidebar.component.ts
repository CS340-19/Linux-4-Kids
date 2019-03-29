import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material';
import { Router, NavigationStart } from '@angular/router';

// import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() sideOpen: boolean = false;
  @Output() sideOpenChange = new EventEmitter();
  @ViewChild('sidebar') sidebar: MatSidenav;

  firstTime: boolean = true;
  // mode = new FormControl('over');
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.sidebar.close();
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnChanges(changes) {
    if (this.firstTime)
      this.firstTime = false;
    else
      this.toggleSidebar();
  }

  public toggleSidebar() {
    this.sidebar.open();
  }

}
