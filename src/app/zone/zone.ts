import { Component } from '@angular/core';

@Component({
  selector: 'app-zone',
  imports: [],
  templateUrl: './zone.html',
  styleUrl: './zone.css'
})
export class Zone {
likeAngular = true;
  count = 0;
  counter: any;

  toggle() {
    this.likeAngular = !this.likeAngular;
  }
 
  startCounter() {
    this.counter = setInterval(() => {
      console.log(this.count++);
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.counter);
  }
}
