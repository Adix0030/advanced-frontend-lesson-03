import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-zone',
  imports: [],
  templateUrl: './zone.html',
  styleUrl: './zone.css'
})
export class Zone {
likeAngular = true;
 
  counter: any;

  toggle() {
    this.likeAngular = !this.likeAngular;
  }
 
 count = signal(0);

   startCounter() {
     this.counter = setInterval(() => {
       this.count.set(this.count() + 1);
       console.log( this.count());
     }, 1000);
   }

  stopCounter() {
    clearInterval(this.counter);
  }
}
