import { Component, inject } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-show-temperature',
  standalone: true,
  imports: [],
  templateUrl: './show-temperature.html',
  styleUrl: './show-temperature.css'
})
export class ShowTemperature {
  private messageService = inject(Message);
  temperature= this.messageService.temperature$
}
