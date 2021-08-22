import { Injectable } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private colors = {
    correct: 'rgb(33, 194, 145)',
    wrong: 'rgb(223, 67, 67)'
  };

  constructor(private animationController: AnimationController) { }

  playAnimation(state: 'correct' | 'wrong', element: Element) {
    this.animationController
        .create()
        .addElement(element)
        .duration(750)
        .keyframes([{ offset: 0.5, backgroundColor: this.colors[state] }])
        .play();
  }
}
