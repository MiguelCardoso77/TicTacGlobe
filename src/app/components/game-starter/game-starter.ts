import { prompts } from '../../data/prompts';

export class GameStarter {
  private readonly allPrompts = Object.keys(prompts);

  private getRandomPrompts(count: number, exclude: string[] = []): string[] {
    const availablePrompts = this.allPrompts.filter(prompt => !exclude.includes(prompt));
    const selected: string[] = [];

    while (selected.length < count && availablePrompts.length > 0) {
      const randomIndex = Math.floor(Math.random() * availablePrompts.length);
      selected.push(availablePrompts[randomIndex]);
      availablePrompts.splice(randomIndex, 1);
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
