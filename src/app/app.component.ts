import { GameDataService } from './game-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameDataService]
})
export class AppComponent implements OnInit {
  private columns = 6;
  private score = 0;
  private lives = 5;
  private randomChoice;
  private gridArray;
  private endMessage;
  public seconds;
  public miliseconds;
  public userClicked = { title: '', color: '' };

  constructor(private gameService: GameDataService) { }

  private endGame() {
    this.gridArray = this.gameService.getGameOverGrid();
    // this.gridArray = []; this.endMessage = 'Game Over !';
  }
  private gameStart(status: boolean) {
    if (status) {

      this.refreshBoard();
    } else {
      console.log('end pressed!');
      this.endGame();
    }

  }

  private onClick(answer) {
    this.userClicked = answer;
  }
  public refreshBoard() {
    // console.log('request new grid !');
    this.gridArray = this.gameService.getPopulatedGrid();
    this.gameService.shuffle(this.gridArray);
    this.randomChoice = this.gameService.getRandomChoice();
  }
  ngOnInit() {
    this.gridArray = this.gameService.getEmptyGrid();
  }

}
