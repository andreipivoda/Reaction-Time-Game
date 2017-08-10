import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class GameDataService {

  private charset =
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  private colors = ['Red', 'Green', 'Blue'];
  private letterOne;
  private colorOne;
  private choice;

  constructor() { }

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
  public getGameOverGrid() {
    return [
      {}, {}, {}, {}, {}, {},
      // tslint:disable-next-line:max-line-length
      {}, { title: 'G', color: 'red' }, { title: 'A', color: 'orange' }, { title: 'M', color: 'gold' }, { title: 'E', color: 'LimeGreen' }, {},
      {}, {}, {}, {}, {}, {},
      {}, { title: 'O', color: 'green' }, {}, { title: 'E', color: 'indigo' }, { title: 'R', color: 'violet' }, {},
      {}, {}, { title: 'V', color: 'blue' }, {}, {}, {},
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
