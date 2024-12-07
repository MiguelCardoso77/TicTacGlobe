import { Component } from '@angular/core';
import { GameComponent } from './pages/game/game.component';

@Component({
  selector: 'app-root',
  imports: [GameComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GeoGridTicTacToe';
}
