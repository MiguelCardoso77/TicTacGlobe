import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TicTacToeComponent} from './components/tic-tac-toe/tic-tac-toe.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TicTacToeComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GeoGridTicTacToe';
}
