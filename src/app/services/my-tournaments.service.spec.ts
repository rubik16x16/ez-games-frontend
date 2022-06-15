import { TestBed } from '@angular/core/testing';

import { MyTournamentsService } from './my-tournaments.service';

describe('MyTournamentsService', () => {
  let service: MyTournamentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTournamentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
