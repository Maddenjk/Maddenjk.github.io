import React from 'react';
import $ from 'jquery';
import DiceRollerD10 from './DiceRollerD10';
import DiceRollerD20 from './DiceRollerD20';

function DiceRoller() {

  const [roller, setRoller] = React.useState(<DiceRollerD10 />)

  const chooseRollerCheck = () => {
    if ($("#DicePoolSystem").is(':checked')) {
      setRoller(<DiceRollerD10 />)
    }
    if ($("#d20System").is(':checked')) {
      setRoller(<DiceRollerD20 />)
    }
  }

  return (
    <>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="RollerChoice" defaultChecked
          id="DicePoolSystem" onChange={chooseRollerCheck} />
        <label className="form-check-label" htmlFor="DicePoolSystem">
          Dice Pool System
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="RollerChoice"
          id="d20System" onChange={chooseRollerCheck} />
        <label className="form-check-label" htmlFor="d20System">
          D20 System
        </label>
      </div>
      {roller}
    </>
  );
}

export default DiceRoller;
