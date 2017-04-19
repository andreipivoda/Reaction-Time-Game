import { GameDataService } from './game-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <br><br><br>
   <app-game-hud [score]="score" [lives]="lives"
                 (startPlay)="gameStart()"></app-game-hud>

   <app-game-board [columns]="columns" [gridArray]="gridArray" [endMessage]="endMessage"
                   (answer)="onClick($event)"></app-game-board>
`,
  styleUrls: ['./app.component.css'],
  providers: [GameDataService]
})
export class AppComponent implements OnInit{
  private columns = 6;
  private score = 0;
  private lives = 5;
  private randomChoice;
  private gridArray ;
  private endMessage ;
 constructor(private gameService: GameDataService) {}

 private endGame(){
    this.gridArray = [];
    this.endMessage = 'Game Over !';
 }
  private gameStart() {
    if (this.lives > 1)
    {
      console.log('starting the game');
    this.gridArray = this.gameService.getPopulatedGrid();
    this.gameService.shuffle(this.gridArray);
  } else {
        this.endGame();
    }
  }

  ngOnInit() {
    this.gridArray = this.gameService.getEmptyGrid();
  }

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
          this.endGame();
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
