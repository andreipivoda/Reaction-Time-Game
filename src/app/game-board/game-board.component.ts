import { GameDataService } from './../game-data.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.css'],
    providers: [GameDataService]
})
export class GameBoardComponent implements OnInit {

    @Input() columns;
    @Output() answer = new EventEmitter();
    @Output() randomChoice = new EventEmitter();
    private gridArray;
    private rows;

    constructor(private gameData: GameDataService) {
    }

    ngOnInit() {
        this.gridArray = this.gameData.getEmptyGrid();
        this.rows = Array.from(Array(Math.ceil(this.gridArray.length / this.columns)).keys());
    }

    // start this.gameData.shuffle(this.gridArray);

    emitAnswer(answer) {
        // console.log(answer);
        this.randomChoice.emit(this.gameData.getRandomChoice());
        this.answer.emit(answer);

    }
}
