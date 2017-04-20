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

  private maxTime;
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



  constructor(private gameData: GameDataService) { }

  ngOnInit() { // start values 0.0s
    this.seconds = 0;
    this.miliseconds = 0;
    this.maxTime = 3;
    this.idle = true;
    this.randomChoice = [];
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
    const timeObs = Observable.interval(200).map(x => x + 1);
    // const timeObs = Observable.timer(0, 3000);

    let timeElapsed = 0;
    this.seconds = 0;
    this.miliseconds = 0;


    this.timer = timeObs.subscribe(x => {
      // console.log(x);
      timeElapsed = x;

      if (timeElapsed % 5 === 0) {
        this.seconds++;
        this.miliseconds = 0;
      } else {
        this.miliseconds += 2;

      }
      if (this.lives === 0) {
        this.stopPlaying('dead');
      }
      if (this.seconds === 3) {
        timeElapsed = 0;
        this.seconds = 0;
        this.miliseconds = 0;
        this.userClicked.title = '';
        this.userClicked.color = '';
        this.newRound.emit();
        this.lives--;
        console.log('new Round !');
      }


      if (this.userClicked.title !== '') {

        if (this.userClicked.title === this.randomChoice[0] || this.userClicked.color === this.randomChoice[0]) {
          this.score++;
          timeElapsed = 0;
          this.seconds = 0;
          this.miliseconds = 0;
          this.userClicked.title = '';
          this.userClicked.color = '';
          this.newRound.emit();
          console.log('new Round !');

        } else {
          timeElapsed = 0;
          this.seconds = 0;
          this.miliseconds = 0;
          this.lives--;
          this.userClicked.title = '';
          this.userClicked.color = '';
          this.newRound.emit();
          console.log('new Round !');
        }



      }

      // } else if (this.userClicked === this.randomChoice) {
      //   this.score++;
      // } else {
      //   this.lives--;
      //   console.log('- lives;');
      // }
    });

  }
  public stopTimer() {
    this.timer.unsubscribe();
  }

}
