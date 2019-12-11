import { TestBed } from '@angular/core/testing';

import { TfService } from './tf.service';

describe('TfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TfService = TestBed.get(TfService);
    expect(service).toBeTruthy();
  });
});
