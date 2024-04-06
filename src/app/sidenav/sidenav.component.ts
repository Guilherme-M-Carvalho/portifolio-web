import { Component, EventEmitter, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TreeCodeComponent } from './tree-code/tree-code.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterOutlet,
    TreeCodeComponent,
    MatDividerModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  public showFiller: boolean = false;

  @Output() public changeWidthAside: EventEmitter<number> = new EventEmitter()
  @Output() public disableMenuAside: EventEmitter<boolean | undefined> = new EventEmitter()

  public width: number = 140


  handleDrag(event: DragEvent) {

    const pageX = Math.round(event.pageX)
    const positionX = Math.round((<any>event.target)?.getBoundingClientRect()?.x)
    const offsetX = Math.round(pageX > positionX ? (pageX - positionX) : -(positionX -pageX))

    if (offsetX > 0) {
      this.width += Math.abs(offsetX)
    } else {
      this.width -= Math.abs(offsetX)
    }
    if (this.width < 140) {
      this.width = 140
      this.disableMenuAside.emit(false)
    } else if (this.width > (window.innerWidth - 140)) {
      this.width = (window.innerWidth - 140)
    }
    this.changeWidthAside.emit(this.width)
  }

}
