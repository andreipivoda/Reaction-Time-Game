import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHudComponent } from './game-hud.component';

describe('GameHudComponent', () => {
  let component: GameHudComponent;
  let fixture: ComponentFixture<GameHudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameHudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
