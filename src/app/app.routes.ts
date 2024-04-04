import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { Body2Component } from './body2/body2.component';

export const routes: Routes = [
    {
        path: "body", component: BodyComponent
    },
    {
        path: "body2", component: Body2Component
    }
];
