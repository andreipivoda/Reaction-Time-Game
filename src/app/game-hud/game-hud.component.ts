import { GameDataService } from './../game-data.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-hud',
  templateUrl: './game-hud.component.html',
  styleUrls: ['./game-hud.component.css'],
  providers: [GameDataService]
})
export class GameHudComponent implements OnInit {

  seconds;
  miliseconds;
  boxType;
  maxTime;
  @Input() lives;
  @Input() score;
  randomChoice;
  @Output() outcome = new EventEmitter();
  @Output() startPlay = new EventEmitter();
  subscribed;
  stopped;

  timer;
  timeObs: Observable<any>;
  timeElapsed;

  constructor(private gameData: GameDataService) { }

  ngOnInit() { // start values 0.0s
    this.seconds = 0;
    this.miliseconds = 0;
    this.maxTime = 3;
    this.subscribed = false;
    this.stopped = false;

    console.log(this.randomChoice);

  }

  start() {
    if (!this.subscribed) {
      this.startTheObs()
    } else { return; }
  }

  startTheObs() {
    this.subscribed = true;
    this.stopped = false;
    this.startPlay.emit(true);
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
      if (this.seconds === 3) {
        this.stop('auto');
        console.log('time\'s up');
        console.log(this.timer);
      }
    });

  }
  stop(who: string) {

    if (!!this.timer) {
      this.timer.unsubscribe();
      this.stopped = true;
      this.subscribed = false;
    }

  }
}
