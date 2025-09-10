import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Message {
  private temperature = signal(0);
  readonly temperature$ = this.temperature.asReadonly();

  setTemperature(temp: number) {
    if (temp < 0 || temp > 100) {
      return;
    }
    this.temperature.set(temp);
  }

}
