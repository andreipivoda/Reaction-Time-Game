import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <br><br><br>
<app-game-hud></app-game-hud>
<app-game-board [columns]="columns" (answer)="onClick($event)"></app-game-board>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private columns = 6;

  onClick(answer) {

    if (!!answer) {
      console.log(answer);
    }

  }

}
