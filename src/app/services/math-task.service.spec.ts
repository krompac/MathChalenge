import { TestBed } from '@angular/core/testing';

import { MathTaskService } from './math-task.service';

describe('MathTaskService', () => {
  let service: MathTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
