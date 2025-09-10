import { Routes } from '@angular/router';
import { Zone } from './zone/zone';

export const routes: Routes = [
  {path: 'zone', component: Zone},
  {path: '', redirectTo: '/zone', pathMatch: 'full'},
];
