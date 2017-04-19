import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { } from 'rxjs/Rx';

@Component({
  selector: 'app-game-hud',
  templateUrl: './game-hud.component.html',
  styleUrls: ['./game-hud.component.css']
})
export class GameHudComponent implements OnInit {

  timer;
  timeObs: Observable<any>;
  timeElapsed;
  seconds = 0;
  miliseconds = 0;
  constructor() { }

  ngOnInit() {
    this.timeObs = Observable.interval(200).map(x => x + 1);
  }

  start() {
    this.timeElapsed = 0;
    this.seconds = 0;
    this.miliseconds = 0;
    this.timer = this.timeObs.subscribe(x => {
      console.log(x); this.timeElapsed = x;
      if (this.timeElapsed % 5 === 0) {
        this.seconds++;
        this.miliseconds = 0;
      } else {
        this.miliseconds += 200;
      }
    });

  }
  stop() {
    this.timer.unsubscribe();
  }
}
