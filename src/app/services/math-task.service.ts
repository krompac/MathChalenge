import { Injectable } from '@angular/core';
import { Operations } from '../utility/operations';
import { NumberGeneratorService } from './number-generator.service';

@Injectable({
  providedIn: 'root',
})
export class MathTaskService {
  private result: number = 0;
  private readonly equals = ' =';

  constructor(private numberGeneratorService: NumberGeneratorService) {}

  public generateTask(): string {
    const secondOperand = this.numberGeneratorService.getSecondOperand();

    const numberOfPosssibleOperations = secondOperand === 0 ? 3 : 4;
    const operation: Operations = this.getOperation(numberOfPosssibleOperations);

    const firstOperand = this.numberGeneratorService.getFirstOperand(operation, secondOperand);

    this.generateResult(firstOperand, secondOperand, operation);

    return firstOperand + ' ' + Operations[operation] + ' ' + secondOperand + this.equals;
  }

  private getOperation(numberOfPosssibleOperations: number) {
    const operation: Operations = Math.floor(Math.random() * numberOfPosssibleOperations);
    return Operations[Operations[operation]];
  }

  private generateResult(firstNumber: number, secondNumber: number, operation: Operations) {
    switch (Operations[Operations[operation]]) {
      case Operations['+']:
        this.result = firstNumber + secondNumber;
        break;
      case Operations['-']:
        this.result = firstNumber - secondNumber;
        break;
      case Operations['*']:
        this.result = firstNumber * secondNumber;
        break;
      case Operations['/']:
        this.result = firstNumber / secondNumber;
        break;
    }
  }

  public checkValidity(answer: number): boolean {
    return this.result === answer;
  }
}
