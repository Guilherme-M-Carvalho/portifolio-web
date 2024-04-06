import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavIconsComponent } from './sidenav-icons/sidenav-icons.component';
import { TabsComponent } from './tabs/tabs.component';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidenavIconsComponent,
    SidenavComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    TabsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  title = 'web';
  @ViewChild('sidenav') public sidenav: any
  public width: number = 140
  public menuVisible: boolean = true

  constructor(
    public fileService: FileService
  ){}

  handleDragOver(event: any) {
    event.dataTransfer.dropEffect = "hovered";
    event.target.cursor = "move"
    event.preventDefault()
  }

  toogleMenu() {
    this.sidenav.toggle()
    this.menuVisible = this.sidenav._opened
  }

  disableMenuAside(){
    this.toogleMenu() 
  }

  changeWidthAside(width: number) {
    this.width = width
  }
}
