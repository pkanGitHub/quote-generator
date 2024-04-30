import { TestBed } from '@angular/core/testing';

import { QuoteGetterServicee } from './quote-getter.service';

describe('QuoteGetterService', () => {
  let service: QuoteGetterServicee;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteGetterServicee);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
