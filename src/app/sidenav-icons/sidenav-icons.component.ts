import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { ModulesModel } from '../shared/modules.model';
import { ModulesMock } from './modules-mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-icons',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './sidenav-icons.component.html',
  styleUrl: './sidenav-icons.component.scss'
})
export class SidenavIconsComponent implements OnInit {

  @Output() public disableMenuAside: EventEmitter<boolean | undefined> = new EventEmitter()

  public modules: ModulesModel[] = ModulesMock

  constructor(private route: Router) { }

  changeMenu(index: number) {
    const url = this.route.routerState.snapshot.url.replace('/','')
    if(url == this.modules[index].route) this.disableMenuAside.emit()
  }

  ngOnInit(): void {
  }
}
