import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-sidenav-icons',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule
  ],
  templateUrl: './sidenav-icons.component.html',
  styleUrl: './sidenav-icons.component.scss'
})
export class SidenavIconsComponent {

}
