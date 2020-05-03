import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, keyframes } from '@angular/animations';
import { animationBox } from './app.animation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    animationBox
  ]
})
export class AppComponent  {
 boxState = 'end'
 visible = true

 animate(){
   this.boxState = this.boxState === 'end' ? 'start' : 'end'
 }

 animationStarted(event: AnimationEvent) {
   console.log(event)
 }

 animationDone(event: AnimationEvent) {
   console.log(event)
 }
}
