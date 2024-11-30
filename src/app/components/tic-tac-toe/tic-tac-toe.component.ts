import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { CountrySearcherComponent } from '../country-searcher/country-searcher.component';
import { promptData } from '../../data/promptData';
import { GameStarter } from '../game-starter/game-starter';

@Component({
  standalone: true,
  selector: 'app-tic-tac-toe',
  imports: [
    NgForOf,
    NgIf,
    CountrySearcherComponent
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

    console.log(`Cell clicked: ${row}, ${col}`);
    this.selectedCell = { row: row - 1, col: col - 1 };
    this.openSearcher = true;
  }

  onCountrySelected(country: { id: string; name: string }): void {
    if (this.selectedCell) {
      const { row, col } = this.selectedCell;

      if (promptData[this.topPrompts[col]].includes(country.name) && promptData[this.sidePrompts[row]].includes(country.name)) {
        console.log(`Country "${country.name}" is a valid answer!"`);
        this.board[row][col] = country.name;
      }

      this.openSearcher = false;
      this.selectedCell = null;
    }
  }
}
