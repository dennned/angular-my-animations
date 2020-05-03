import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('box', [
      state('start', style({
        background:'blue'
      })),
      state('end', style({
        background:'red',
        transform: 'scale(1.3)'
      })),
      transition('start => end', animate(450)),
      transition('end => start', animate('800ms ease-in-out')),
    ])
  ]
})
export class AppComponent  {
 boxState = 'end'

 animate(){
   this.boxState = this.boxState === 'end' ? 'start' : 'end'
 }
}
