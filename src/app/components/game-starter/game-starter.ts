import { prompts } from '../../data/prompts';

export class GameStarter {
  private readonly allPrompts = Object.keys(prompts);

  private getRandomPrompts(count: number): string[] {
    const prompts = [...this.allPrompts];
    const selected: string[] = [];

    while (selected.length < count && prompts.length > 0) {
      const randomIndex = Math.floor(Math.random() * prompts.length);
      selected.push(prompts[randomIndex]);
      prompts.splice(randomIndex, 1);
    }

    return selected;
  }

  resetGame(): { topPrompts: string[]; sidePrompts: string[]; board: (string | null)[][] } {
    const topPrompts = this.getRandomPrompts(3);
    const sidePrompts = this.getRandomPrompts(3);
    const board = Array(3).fill(null).map(() => Array(3).fill(null));

    return { topPrompts, sidePrompts, board };
  }
}
