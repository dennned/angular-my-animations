import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

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
      state('special', style({
        background:'orange',
        transform: 'scale(0.5)',
        borderRadius: '50%'
      })),
      transition('start => end', animate(450)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special <=> *', [
        style({background:'green'}),
        animate('1s', style({
          background:'pink'
        })),
        animate(750)
      ]),
      // void => *
      transition(':enter',[
        style({opacity : 0}),
        animate('850ms ease-out')
      ]),
      // * => void
      transition(':leave',[
        style({opacity : 1}),
        group([
          animate('750ms ease-in'),
          animate(500, style({
            color:'#000',
            fontWeight:'bold'
          })),
          animate(250)
        ])
        
      ]),
    ])
  ]
})
export class AppComponent  {
 boxState = 'end'
 visible = true

 animate(){
   this.boxState = this.boxState === 'end' ? 'start' : 'end'
 }
}
