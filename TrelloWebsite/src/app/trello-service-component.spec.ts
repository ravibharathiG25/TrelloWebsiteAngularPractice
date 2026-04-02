import { TestBed } from '@angular/core/testing';

import { TrelloServiceComponent } from './trello-service-component';

describe('TrelloServiceComponent', () => {
  let service: TrelloServiceComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrelloServiceComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
