import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
rl;
rows;
gridArray = [
{title:this.genRandomLetter(), color: 'red'}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()},
{title: this.genRandomLetter(), color: 'red'}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()},
{title: this.genRandomLetter(), color: 'red'}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()},
{title: this.genRandomLetter(), color: 'red'}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()},
{title: this.genRandomLetter(), color: 'red'}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()},
{title: this.genRandomLetter(), color: 'red'}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()}, {title: this.genRandomLetter()},


]

  constructor() { }

  ngOnInit() {
   this.rows = Array.from(Array(Math.ceil(this.gridArray.length / 6)).keys());
  }

  genRandomLetter(){
    return this.charset.charAt(Math.floor(Math.random() * this.charset.length));
  }

}
