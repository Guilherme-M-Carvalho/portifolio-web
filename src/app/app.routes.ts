import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CodeComponent } from './code/code.component';
import { RoutesMock } from './routes-mock';
import { TreeCodeComponent } from './sidenav/tree-code/tree-code.component';

export const routes: Routes = [
    { path: '', redirectTo: RoutesMock.HOME, pathMatch: 'full' },
    {
        path: RoutesMock.HOME, 
        component: HomeComponent,
    },
    {
        path: RoutesMock.CODE,
        component: TreeCodeComponent
    }
];
