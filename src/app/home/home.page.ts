import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationService } from '../services/animation.service';
import { MathTaskService } from '../services/math-task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('textInput') textInput: ElementRef;

  clear = 'Clear';
  check = 'Check';
  changeSign = '+/-';

  data = [
    [1, 4, 7, this.clear],
    [2, 5, 8, 0],
    [3, 6, 9, this.changeSign],
  ];

  task = '';

  constructor(private mathTaskService: MathTaskService, private animationService: AnimationService) {}

  get resultValue() {
    return this.textInput.nativeElement.value;
  }

  set resultValue(value: any) {
    this.textInput.nativeElement.value = value;
  }

  ngOnInit() {
    this.task = this.mathTaskService.generateTask();
    console.log(this.task);
  }

  checkTask() {
    console.log('checking...');
    const state =
      this.resultValue !== '' && this.mathTaskService.checkValidity(Number(this.resultValue)) ? 'correct' : 'wrong';

    this.animationService.playAnimation(state, this.textInput.nativeElement);

    this.task = this.mathTaskService.generateTask();
    this.resultValue = '';
  }

  switchOrAddSign() {
    switch (this.resultValue) {
      case '':
        this.resultValue = '-';
        break;
      case '-':
        this.resultValue = '';
        break;
      default:
        if (!isNaN(Number(this.resultValue))) {
          this.resultValue = (-1 * Number(this.resultValue)).toString();
        }
        break;
    }
  }

  onClick(rowNumber: number, columnNumber: number) {
    const data = this.dataEntry(rowNumber, columnNumber);

    if (!isNaN(Number(data))) {
      this.resultValue += data;
    } else if (data === this.changeSign) {
      this.switchOrAddSign();
    } else if (data === this.clear) {
      this.resultValue = '';
    }
  }

  dataEntry(rowNumber: number, columnNumber: number) {
    return this.data[rowNumber][columnNumber];
  }
}
