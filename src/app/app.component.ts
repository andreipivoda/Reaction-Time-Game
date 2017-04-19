import { GameDataService } from './game-data.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <br><br><br>
   <app-game-hud [score]="score" [lives]="lives" (startPlay)="gameStart()"></app-game-hud>
   <app-game-board [columns]="columns" (answer)="onClick($event)" (randomChoice)="getRandomChoice($event)" ></app-game-board>
`,
  styleUrls: ['./app.component.css'],
  providers: [GameDataService]
})
export class AppComponent {
  private columns = 6;
  private score = 0;
  private lives = 5;
  private randomChoice;


  private gameStart() {

  }
  constructor(private gameService: GameDataService) { }

  private onClick(answer) {

    if (!!answer.title) {
      if (answer.title === this.randomChoice || answer.color === this.randomChoice) {
        console.log('correct');
        this.score++;
      } else {

        if (this.lives > 0) {
          this.lives--;
          console.log('fail');
        } else {
          console.log('game over');
        }

      }

    }



  }

  getRandomChoice(choice) {
    this.randomChoice = choice;
    console.log(choice);
    return choice;

  }


}
