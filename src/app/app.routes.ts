import { Routes } from '@angular/router';
import { Zone } from './zone/zone';
import { Temperature } from './temperature/temperature';

export const routes: Routes = [
  {path: 'zone', component: Zone},
  {path: 'temperature', component: Temperature},
  {path: '', redirectTo: '/zone', pathMatch: 'full'},
];
