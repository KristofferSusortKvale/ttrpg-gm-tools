import React, { useState, FC } from 'react';
import { Dice } from '../../models/Dice';
import { DiceVisual } from './DiceVisual';
import Alert from 'react-bootstrap/Alert';
import './DicePoolVisual.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { getDiceIcon } from '../../utils/getDiceIcon';

interface DicePoolVisualProps {
}

export const DicePoolVisual: FC<DicePoolVisualProps> = () => {

  const [diceList, setDiceList] = useState<Dice[]>([]);

  const [total, setTotal] = useState(0);

  const roll = () => {
    let t = 0;
    for (const dice of diceList) {
      dice.roll()
      t += dice.lastRoll? dice.lastRoll : 0;
    }
    setTotal(t);
  }

  const plus_dice = (sides: number) => {
    let newDiceList: Dice[] = [];
    for (const dice of diceList) {
      newDiceList.push(dice);
    }
    newDiceList.push(new Dice(sides));
    setDiceList(newDiceList);
  }

  const minus_dice = (dice: Dice) => {
    setTotal(total - (dice.lastRoll? dice.lastRoll : 0));
    setDiceList(diceList.filter((it) => it !== dice));
  }

  const remove_all = () => {
    setTotal(0);
    setDiceList([]);
  }

  return (
    <div className="DicePoolVisual">
      <h1>Dice</h1>
      <div className="DiceList">
        <div className="ButtonDiv">
          <Button size='lg' onClick={roll} >Roll!</Button>
        </div>
        <div className="ButtonDiv">
          <Button size='lg' onClick={remove_all}>Remove all</Button>
        </div>
        <div className="TotalDiv">
          <Card className="marginDiv" bg="primary">
            <Card.Header>Total:</Card.Header>
            <Card.Body>
              <Card.Title>{total}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      <hr/>
      <div className="DiceList">
        <>
        {diceList.map((dice, i) => {
          return (
            <Alert key={i} variant="primary" onClose={() => minus_dice(dice)} dismissible>
              <DiceVisual dice={dice} />
            </Alert>
        )})}
        </>
      </div>
      <hr />
      <div className="AddDiceList">
        <Button variant="success" onClick={() => plus_dice(4)} >
          <Image className="SmallLogo" src={getDiceIcon(4)}/>
        </Button>
        <Button variant="success" onClick={() => plus_dice(6)} >
          <Image className="SmallLogo" src={getDiceIcon(6)}/>
        </Button>
        <Button variant="success" onClick={() => plus_dice(8)} >
          <Image className="SmallLogo" src={getDiceIcon(8)}/>
        </Button>
        <Button variant="success" onClick={() => plus_dice(10)} >
          <Image className="SmallLogo" src={getDiceIcon(10)}/>
        </Button>
        <Button variant="success" onClick={() => plus_dice(12)} >
          <Image className="SmallLogo" src={getDiceIcon(12)}/>
        </Button>
        <Button variant="success" onClick={() => plus_dice(20)} >
          <Image className="SmallLogo" src={getDiceIcon(20)}/>
        </Button>
      </div>
      <hr />
    </div>
  )
}
