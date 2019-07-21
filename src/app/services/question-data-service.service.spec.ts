import { TestBed } from '@angular/core/testing';

import { QuestionDataServiceService } from './question-data-service.service';

describe('QuestionDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionDataServiceService = TestBed.get(QuestionDataServiceService);
    expect(service).toBeTruthy();
  });
});
