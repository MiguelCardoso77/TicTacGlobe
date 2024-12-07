import { Component } from '@angular/core';
import { TicTacToeComponent } from '../../components/tic-tac-toe/tic-tac-toe.component';

@Component({
  standalone: true,
  selector: 'app-game',
  imports: [
    TicTacToeComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

}
