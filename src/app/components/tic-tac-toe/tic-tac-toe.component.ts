import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CountrySearcherComponent } from '../country-searcher/country-searcher.component';
import { promptData } from '../../data/promptData';
import { GameStarter } from '../game-starter/game-starter';
import { CountryBoxComponent } from '../country-box/country-box.component';

@Component({
  standalone: true,
  selector: 'app-tic-tac-toe',
  imports: [
    NgIf,
    CountrySearcherComponent,
    CountryBoxComponent
  ],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css',
  providers: [GameStarter]
})
export class TicTacToeComponent {
  topPrompts: string[] = [];
  sidePrompts: string[] = [];
  board: (string | null)[][] = [];

  openSearcher: boolean = false;
  selectedCell: { row: number; col: number } | null = null;

  constructor(private starter: GameStarter) {
    const game = this.starter.resetGame();
    this.topPrompts = game.topPrompts;
    this.sidePrompts = game.sidePrompts;
    this.board = game.board;
  }

  handleCellClick(row: number, col: number): void {
    if (row == 0 || col == 0) {
      console.log('Invalid move');
      return;
    }

    this.selectedCell = { row: row - 1, col: col - 1 };
    this.openSearcher = true;
  }

  onCountrySelected(country: { id: string; name: string }): void {
    if (this.selectedCell) {
      const { row, col } = this.selectedCell;
      const topPromptKey = this.topPrompts[col];
      const sidePromptKey = this.sidePrompts[row];

      const isValid = promptData[topPromptKey]?.includes(country.name) && promptData[sidePromptKey]?.includes(country.name);

      if (isValid) {
        console.log(`Country "${country.name}" is a valid answer!`);
        this.board[row][col] = country.id;
      } else {
        console.log(`Country "${country.name}" is not valid for the selected prompts.`);
      }

      this.openSearcher = false;
      this.selectedCell = null;
    }
  }
}
