import { GameDataService } from './game-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameDataService]
})
export class AppComponent implements OnInit {
  public columns = 6;
  public score = 0;
  public lives = 5;
  public randomChoice;
  public gridArray;
  public endMessage;
  public seconds;
  public miliseconds;
  public userClicked = { title: '', color: '' };

  constructor(private gameService: GameDataService) { }

  private endGame() {
    this.gridArray = this.gameService.getGameOverGrid();
    // this.gridArray = []; this.endMessage = 'Game Over !';
  }
  public gameStart(status: boolean) {
    if (status) {

      this.refreshBoard();
    } else {
      console.log('end pressed!');
      this.endGame();
    }

  }

  public onClick(answer) {
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
