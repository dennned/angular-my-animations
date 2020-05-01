import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

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
      }))
    ])
  ]
})
export class AppComponent  {
 boxState = 'start'

 animate(){
   this.boxState = this.boxState === 'end' ? 'end' : 'start'
 }
}
