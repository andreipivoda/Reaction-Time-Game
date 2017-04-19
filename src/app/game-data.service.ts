import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GameDataService {

  // tslint:disable-next-line:max-line-length
  private charset = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  private color = ['red', 'green', 'blue'];
  private letterOne;
  private letterTwo;
  private colorOne;
  private colorTwo;

  constructor() {
    this.shuffle(this.charset);
    this.shuffle(this.color);
  }



  // getData() { return Observable.from([{ name: '' }]); } fromArray ...
  public getPopulatedGrid() {
    this.letterOne = Object(this.charset)[0];
    this.letterTwo = Object(this.charset)[1];
    this.colorOne = Object(this.color)[0];
    this.colorTwo = Object(this.color)[1];
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



  public getCharset() {
    return this.charset;
  }

}