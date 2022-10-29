import d4 from '../assets/dice/d4.png';
import d6 from '../assets/dice/d6.png';
import d8 from '../assets/dice/d8.png';
import d10 from '../assets/dice/d10.png';
import d12 from '../assets/dice/d12.png';
import d20 from '../assets/dice/d20.png';

export function getDiceIcon(sides: number) {
  if (sides === 4) {
    return d4
  }
  if (sides === 8) {
    return d8
  }
  if (sides === 10) {
    return d10
  }
  if (sides === 12) {
    return d12
  }
  if (sides === 20) {
    return d20
  }
  return d6
}
