import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GameDataService {

  private charset =
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  private colors = ['red', 'green', 'blue'];
  private letterOne;
  private colorOne;
  private choice;
  public gameStatus;
  seconds;
  miliseconds;
  timer;

  constructor() {
  }

  public shuffle(a) {
    for (let i = a.length; i; i--) {
      const j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  public getPopulatedGrid() {
    this.shuffle(this.charset);
    this.shuffle(this.colors);
    this.letterOne = Object(this.charset)[0];
    const letterTwo = Object(this.charset)[1];
    this.colorOne = Object(this.colors)[0];
    const colorTwo = Object(this.colors)[1];
    this.genChoice();
    return [
      { title: letterTwo, color: colorTwo }, {}, {}, {}, {}, {},
      { title: this.letterOne, color: this.colorOne }, {}, {}, {}, {}, {},
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

  private genChoice() {
    this.choice = [this.letterOne, this.colorOne];
    this.shuffle(this.choice);
    return this.choice;
  }
  public getRandomChoice() {
    return this.choice;
  }



}
