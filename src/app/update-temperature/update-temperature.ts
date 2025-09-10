import { Component, inject } from '@angular/core';
import { Message } from '../message';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-temperature',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-temperature.html',
  styleUrl: './update-temperature.css'
})
export class UpdateTemperature {
  private messageService = inject(Message);
  temperature= 0;

  updateTemperature() {
    this.messageService.setTemperature(this.temperature);
  }
}
