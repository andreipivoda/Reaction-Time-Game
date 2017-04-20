import { GameDataService } from './../game-data.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as Rx from 'rxjs/Rx';


@Component({
  selector: 'app-game-hud',
  templateUrl: './game-hud.component.html',
  styleUrls: ['./game-hud.component.css'],
  providers: [GameDataService]
})
export class GameHudComponent implements OnInit {

  maxTime;
  idle;
  timer;
  seconds;
  miliseconds;
  @Input() randomChoice;
  @Input() lives;
  @Input() score;
  @Output() startEmitter = new EventEmitter();

  constructor(private gameData: GameDataService) { }

  ngOnInit() { // start values 0.0s
    this.seconds = 0;
    this.miliseconds = 0;
    this.maxTime = 3;
    this.idle = true;
  }

  public startPlaying() {
    this.startTheObs();
    console.log('emitting start');
    this.startEmitter.emit(true);

  }


  public stopPlaying(who: string) {
    console.log('emitting stopstopping');
    this.startEmitter.emit(false);
    this.stopTimer();
  }

  public startTheObs() {
    console.log('start counting');
    const timeObs = Observable.interval(200).delay(500).map(x => x + 1);

    let timeElapsed = 0;
    this.seconds = 0;
    this.miliseconds = 0;

    this.timer = timeObs.subscribe(x => {
      timeElapsed = x;
      if (timeElapsed % 5 === 0) {
        this.seconds++;
        this.miliseconds = 0;
      } else {
        this.miliseconds += 2;
      }
      if (this.seconds >= 3) {
        this.stopTimer();
        console.log('time\'s up');
      }
    });

  }
  public stopTimer() {
    this.timer.unsubscribe();
  }

}
