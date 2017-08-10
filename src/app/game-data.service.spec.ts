import { TestBed, inject } from '@angular/core/testing';

import { GameDataService } from './game-data.service';

describe('GameDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameDataService]
    });
  });

  it('should ...', inject([GameDataService], (service: GameDataService) => {
    expect(service).toBeTruthy();
  }));
});
