import { Injectable } from '@angular/core';
import { Operations } from '../utility/operations';

@Injectable({
  providedIn: 'root'
})
export class NumberGeneratorService {

  constructor() { }

  public getFirstOperand(operation: Operations, secondOperand: number): number {
    if (Operations[Operations[operation]] === Operations["/"]) {
      return this.getDividend(0, 10, secondOperand);
    } else {
      return this.getRandomArbitrary();
    }
  }

  public getSecondOperand(): number {
    return this.getRandomArbitrary();
  }

  private getDividend(min: number, max: number, divisor: number): number {
    return this.getRandomArbitrary(min, max) * divisor;
  }

  private getRandomArbitrary(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  private whole(number: number): number {
    return Math.floor(number);
  }
}
