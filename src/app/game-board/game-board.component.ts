import { GameDataService } from './../game-data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.css'],
    providers: [GameDataService]
})
export class GameBoardComponent implements OnInit {

    myVar;
    private rows;
    private columns = 6;
    private gridArray;
    @Output() answer = new EventEmitter();




    constructor(private gameData: GameDataService) {

    }

    ngOnInit() {
        this.gridArray = this.gameData.getData();
        this.gameData.shuffle(this.gridArray);
        this.rows = Array.from(Array(Math.ceil(this.gridArray.length / this.columns)).keys());
    }

    clicked(answer) {
        this.answer.emit(answer);
        this.myVar = answer;
        // this.myVar = Math.floor(Math.random() * 3);
    }
}
