import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GameDataService {

  // tslint:disable-next-line:max-line-length
  private charset = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  private colors = ['red', 'green', 'blue'];
  private letterOne;
  private letterTwo;
  private colorOne;
  private colorTwo;
  private choice;



  constructor() {
    this.shuffle(this.charset);
    this.shuffle(this.colors);
  }



  // getData() { return Observable.from([{ name: '' }]); } fromArray ...
  public getPopulatedGrid() {
    this.letterOne = Object(this.charset)[0];
    this.letterTwo = Object(this.charset)[1];
    this.colorOne = Object(this.colors)[0];
    this.colorTwo = Object(this.colors)[1];
    this.genChoice();
    return [
      { title: this.letterTwo, color: this.colorOne }, {}, {}, {}, {}, {},
      { title: this.letterOne, color: this.colorTwo }, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {}
    ];
  }

  public getEmptyGrid() {
    return [
      {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {}
    ];
  }



  public shuffle(a) {
    for (let i = a.length; i; i--) {
      const j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  private genChoice() {
    this.choice = [this.letterOne, this.colorTwo];
    this.shuffle(this.choice);
    return this.choice;
  }
  public getRandomChoice() {
    return this.choice;
  }


  public getCharset() {

    return this.charset;
  }

}
