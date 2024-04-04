import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatDividerModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  @ViewChild('drawer') public drawer: any
  public drawerOpen: boolean = false;
  public showFiller: boolean = false;
  public width: number = 200

  handleToggleNav() {
    this.drawer.toggle()
    if (this.drawer._opened) {
      this.width = 200
    }
    this.drawerOpen = this.drawer._opened
    console.log(this.drawerOpen);

  }

  handleDrag(event: DragEvent) {
    const offsetx = event.offsetX
    if (offsetx > 0) {
      this.width += Math.abs(offsetx)
    } else {
      this.width -= Math.abs(offsetx)
    }
    if (this.width < 200) {
      this.width = 200
    } else if (this.width > (window.innerWidth - 200)) {
      this.width = (window.innerWidth - 200)
    }
  }
}
