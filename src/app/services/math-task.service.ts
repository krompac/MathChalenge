import { Injectable } from '@angular/core';
import { NumberGeneratorService } from './number-generator.service';

export enum Operations {
  '+',
  '-',
  '*',
  '/',
}

@Injectable({
  providedIn: 'root',
})
export class MathTaskService {
  private result: number = 0;

  constructor(private numberGeneratorService: NumberGeneratorService) {}

  get equals() {
    return ' =';
  }

  public generateTask(): string {
    const secondOperand = this.numberGeneratorService.getSecondOperand();

    const moduloNumber = secondOperand === 0 ? 3 : 4;
    const operation: Operations = this.getOperation(moduloNumber);

    const firstOperand = this.numberGeneratorService.getFirstOperand(operation, secondOperand);

    this.generateResult(firstOperand, secondOperand, operation);

    return firstOperand + ' ' + Operations[operation] + ' ' + secondOperand + this.equals;
  }

  private getOperation(moduloNumber: number) {
    const operation: Operations = Math.floor(Math.random() * moduloNumber);
    return Operations[Operations[operation]];
  }

  private generateResult(firstNumber: number, secondNumber: number, operation: Operations) {
    switch (Operations[Operations[operation]]) {
      case Operations['+']:
        this.result = firstNumber + secondNumber;
        console.log(this.result);
        break;
      case Operations['-']:
        this.result = firstNumber - secondNumber;
        console.log(this.result);
        break;
      case Operations['*']:
        this.result = firstNumber * secondNumber;
        console.log(this.result);
        break;
      case Operations['/']:
        this.result = firstNumber / secondNumber;
        console.log(this.result);
        break;
    }

    console.log(this.result);
  }

  public checkValidity(answer: number): boolean {
    return this.result === answer;
  }
}
