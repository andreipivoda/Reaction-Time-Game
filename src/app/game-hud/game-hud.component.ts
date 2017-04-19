import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { } from 'rxjs/Rx';

@Component({
  selector: 'app-game-hud',
  templateUrl: './game-hud.component.html',
  styleUrls: ['./game-hud.component.css']
})
export class GameHudComponent implements OnInit {

  seconds;
  miliseconds;
  lives = 5;
  score = 0;
  boxType;
  maxTime;
  @Output() outcome = new EventEmitter();

  timer;
  timeObs: Observable<any>;
  timeElapsed;

  constructor() { }

  ngOnInit() { // start values 0.0s
    this.seconds = 0;
    this.miliseconds = 0;
    this.maxTime = 3;

  }

  start() {

    this.timeObs = Observable.interval(200).delay(500).map(x => x + 1);
    this.timeElapsed = 0;
    this.seconds = 0;
    this.miliseconds = 0;
    this.timer = this.timeObs.subscribe(x => {
      // console.log(x);
      this.timeElapsed = x;
      if (this.timeElapsed % 5 === 0) {
        this.seconds++;
        this.miliseconds = 0;
      } else {
        this.miliseconds += 2;
      }
    });

  }
  stop() {
    if (!!this.timer) {
      this.timer.unsubscribe();
    }
  }
}
