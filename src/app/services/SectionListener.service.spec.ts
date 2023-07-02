/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SectionListenerService } from './SectionListener.service';

describe('Service: SectionListener', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectionListenerService]
    });
  });

  it('should ...', inject([SectionListenerService], (service: SectionListenerService) => {
    expect(service).toBeTruthy();
  }));
});
