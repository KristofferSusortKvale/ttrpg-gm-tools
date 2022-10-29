import React, { FC } from 'react';
import { Dice } from '../../models/Dice';
import './DiceVisual.css';
import Image from 'react-bootstrap/Image';
import { getDiceIcon } from '../../utils/getDiceIcon';

interface DiceVisualProps {
  dice: Dice;
}

export const DiceVisual: FC<DiceVisualProps> = ({dice}) => {

  return (
    <div className="DiceVisual">
      <Image className="SmallLogo" src={getDiceIcon(dice.sides)}/>
      <p>{dice.lastRoll ? dice.lastRoll : "?" }</p>
    </div>
  )
}
