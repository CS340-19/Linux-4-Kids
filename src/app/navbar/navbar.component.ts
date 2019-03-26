import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() sideOpen: boolean;
  @Output() sideOpenChange = new EventEmitter();

  // constructor(public sidebarComponent:SidebarComponent) { }

  sidebarToggle() {
    if(this.sideOpen == false) {
      this.sideOpen = true;
      this.sideOpenChange.emit(this.sideOpen);
    }else{
      this.sideOpen = false;
      this.sideOpenChange.emit(this.sideOpen);
    }
  }
}
