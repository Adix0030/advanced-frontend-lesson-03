import { Component } from '@angular/core';
import { ShowTemperature } from "../show-temperature/show-temperature";

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [ShowTemperature],
  templateUrl: './temperature.html',
  styleUrl: './temperature.css'
})
export class Temperature {

}
