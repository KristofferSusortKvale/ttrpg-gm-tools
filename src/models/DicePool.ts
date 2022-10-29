import { Dice } from './Dice';

export class DicePool {
  dice: Dice[];
  IDs: Map<Dice, number>;
  nextID: number;

  constructor() {
    this.dice = [];
    this.IDs = new Map<Dice, number>();
    this.nextID = 0;
  }

  add_dice(dice: Dice): DicePool {
    this.dice.push(dice);
    this.IDs.set(dice, this.nextID);
    this.nextID += 1;
    return this
  }

  remove_dice(dice: Dice): DicePool {
    this.IDs.delete(dice);
    this.dice.splice(this.dice.indexOf(dice), 1);
    return this
  }

  roll(): number {
    let total = 0;
    for (const d of this.dice) {
      d.roll();
      total += d.lastRoll? d.lastRoll : 0;
    }
    return total;
  }
}
