export class Dice {
  sides: number;
  lastRoll?: number;

  constructor(sides: number) {
    this.sides = sides;
  }

  roll(): void {
    this.lastRoll = Math.floor(Math.random() * this.sides) + 1;
  }
}
