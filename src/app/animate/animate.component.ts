import { Component } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";

@Component({
  selector: 'animate',
  templateUrl: './animate.component.html',
  styleUrls: [ './animate.component.css' ],
  /*animations:[
    trigger('bounce', [
      transition('* => *', useAnimation(bounce))
    ])
  ]*/
})
export class AnimateComponent{

}