import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
myVar = 'not Clicked';
rl;
rows;
gridArray = [
{ title: 'A', color: 'red'}, { }, { }, { }, { }, { },
{ title: 'Z', color: 'blue'}, { }, { }, { }, { }, { },
{ }, { }, { }, { }, { }, { },
{ }, { }, { }, { }, { }, { },
{ }, { }, { }, { }, { }, { },
{ }, { }, { }, { }, { }, { }];

  constructor() {
     this.shuffle(this.gridArray);
  }

  ngOnInit() {
   this.rows = Array.from(Array(Math.ceil(this.gridArray.length / 6)).keys());
  }
  genRandomLetter() {
    return this.charset.charAt(Math.floor(Math.random() * this.charset.length));
  }

clicked(varoable) {
    this.myVar = varoable;
}
 shuffle(a) {
    for (let i = a.length; i; i--) {
        const j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
shuffler() {
    this.shuffle(this.gridArray);
}

}
