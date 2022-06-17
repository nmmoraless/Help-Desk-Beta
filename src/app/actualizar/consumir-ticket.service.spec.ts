import { TestBed } from '@angular/core/testing';

import { ConsumirTicketService } from './consumir-ticket.service';

describe('ConsumirTicketService', () => {
  let service: ConsumirTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumirTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
