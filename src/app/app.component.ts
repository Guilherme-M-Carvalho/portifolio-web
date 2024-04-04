import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, SidenavComponent, MatSidenavModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  title = 'web';
  @ViewChild('sidenav') public sidenav: any
  changeDrawer(){
    this.sidenav.handleToggleNav()
  }

  handleDragOver(event: any){
    event.dataTransfer.dropEffect = "hovered";
    event.target.cursor = "move"
    event.preventDefault()

  }
}
