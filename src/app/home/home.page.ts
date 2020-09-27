import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('textInput') textInput: ElementRef;

  clear = 'Clear';
  check = 'Check';

  data = [
    [1, 4, 7, this.clear],
    [2, 5, 8, 0],
    [3, 6, 9, this.check],
  ];

  constructor() {}

  onClick(rowNumber: number, columnNumber: number) {
    const data = this.dataEntry(rowNumber, columnNumber);

    if (!isNaN(Number(data))) {
      this.textInput.nativeElement.value += data;
    } else if (data === this.clear) {
      this.textInput.nativeElement.value = '';
    }
  }

  dataEntry(rowNumber: number, columnNumber: number) {
    return this.data[rowNumber][columnNumber];
  }
}
