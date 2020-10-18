import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MathTaskService } from '../services/math-task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private subscription = new Subscription();

  @ViewChild('textInput') textInput: ElementRef;

  clear = 'Clear';
  check = 'Check';

  data = [
    [1, 4, 7, this.clear],
    [2, 5, 8, 0],
    [3, 6, 9, this.check],
  ];

  task = '';

  constructor(private mathTaskService: MathTaskService) {}

  get resultValue() {
    return this.textInput.nativeElement.value;
  }

  set resultValue(value: any) {
    this.textInput.nativeElement.value = value;
  }

  ngOnInit() {
    this.task = this.mathTaskService.generateTask();
  }

  checkTask() {
    console.log('checking...');
    if (this.mathTaskService.checkValidity(Number(this.resultValue))) {
      console.log('correct');
    } else {
      console.log('wrong');
    }

    this.task = this.mathTaskService.generateTask();
  }

  onClick(rowNumber: number, columnNumber: number) {
    const data = this.dataEntry(rowNumber, columnNumber);

    if (!isNaN(Number(data))) {
      this.resultValue += data;
    } else {
      if (data === this.check) {
        this.checkTask();
      }

      this.resultValue = '';
    }
  }

  dataEntry(rowNumber: number, columnNumber: number) {
    return this.data[rowNumber][columnNumber];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
