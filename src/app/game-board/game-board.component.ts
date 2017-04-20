import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.css']

})
export class GameBoardComponent implements OnInit {

    @Input() columns;
    @Input() gridArray;
    @Input() endMessage;
    @Output() answer = new EventEmitter();
    private rows;

    constructor() { }

    ngOnInit() {
        this.rows = Array.from(Array(Math.ceil(this.gridArray.length / this.columns)).keys());
    }

    emitAnswer(theBox) {
        this.answer.emit(theBox);
    }
}
