import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-game-hud',
  templateUrl: './game-hud.component.html',
  styleUrls: ['./game-hud.component.css'],
  providers: []
})
export class GameHudComponent implements OnInit {

  private ttc;
  private idle;
  private timer;
  private miliseconds;
  private seconds;
  @Input() randomChoice;
  @Input() lives;
  @Input() score;
  @Input() userClicked;
  @Output() startEmitter = new EventEmitter();
  @Output() newRound = new EventEmitter();

  constructor() { }

  ngOnInit() { // start values 0.0s
    this.seconds = 0;
    this.miliseconds = 0;
    this.ttc = 3;
    this.idle = true;
    this.randomChoice = [];
  }

  public startPlaying() {
    if (this.idle) {
      this.lives = 5;
      this.score = 0;
      this.idle = false;
      this.startTheObs();
      console.log('emitting start');
      this.startEmitter.emit(true);
    }
  }


  public stopPlaying(who: string) {
    if (!this.idle) {
      this.idle = true;
      console.log('emitting stop');
      this.startEmitter.emit(false);
      this.stopTimer();
    }
  }

  public startTheObs() {
    // console.log('start counting');
    const timeObs = Observable.interval(200).map(x => x + 1);

    let timeElapsed = 0;
    this.seconds = 0;
    this.miliseconds = 0;

    this.timer = timeObs.subscribe(x => {
      timeElapsed = x;

      if (this.lives === 0) {
        this.stopPlaying('dead');
      }

      if (timeElapsed % 5 === 0) {
        this.seconds++;
        this.miliseconds = 0;
      } else {
        this.miliseconds += 2;
      }

      if (this.seconds >= this.ttc) {
        timeElapsed = 0;
        this.variableReset();
        this.newRound.emit();
        // console.log(this.ttc); Easier
        // this.ttc /= 0.9;
        // console.log(this.ttc);
        this.lives--;
        console.log('You didnt click in time');
      }

      if (this.userClicked.title !== '') {
        if (this.userClicked.title === this.randomChoice[0] || this.userClicked.color === this.randomChoice[0]) {
          this.score++;
          timeElapsed = 0;
          this.variableReset();
          this.ttc *= 0.9; // Factor
          this.newRound.emit();
          console.log('OK => new Round ! ttc=', this.ttc);
        } else {
          timeElapsed = 0;
          this.lives--;
          this.variableReset();
          this.newRound.emit();
          console.log('Lost a life => new Round !');
        }
      }
    });
  }
  public stopTimer() {
    this.timer.unsubscribe();
  }
  private variableReset() {
    this.userClicked.title = '';
    this.userClicked.color = '';
    this.seconds = 0;
    this.miliseconds = 0;
  }
}
