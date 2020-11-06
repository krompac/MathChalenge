import { Injectable } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private colors = {
    correct: 'rgb(118, 238, 188)',
    wrong: 'rgb(238, 131, 131)'
  };

  constructor(private animationController: AnimationController) { }

  playAnimation(state: 'correct' | 'wrong', element: Element) {
    this.animationController
        .create()
        .addElement(element)
        .duration(500)
        .keyframes([{ offset: 0.5, backgroundColor: this.colors[state] }])
        .play();

    console.log(state);
  }
}
