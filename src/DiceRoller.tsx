import React from 'react';
import $ from 'jquery';
import DiceRollerD10 from './DiceRollerD10';
import DiceRollerD20 from './DiceRollerD20';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

function DiceRoller() {

  const [roller, setRoller] = React.useState(<DiceRollerD10 />);
  const [value, setValue] = React.useState('DicePoolSystem');

  const chooseRollerCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    let currentValue = (event.target as HTMLInputElement).value;
    setValue(currentValue);
    if (currentValue == "DicePoolSystem") {
      setRoller(<DiceRollerD10 />);
    }
    if (currentValue == "d20System") {
      setRoller(<DiceRollerD20 />);
    }
  }

  return (
    <>
      <div className="Page p-4">
        <FormControl component="fieldset" variant="standard">
          <RadioGroup defaultValue="DicePoolSystem" aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group" onChange={chooseRollerCheck} value={value}>
            <FormControlLabel value="DicePoolSystem" control={<Radio />} label="Dice Pool System" />
            <FormControlLabel value="d20System" control={<Radio />} label="D20 System" />
          </RadioGroup>
        </FormControl>
        {roller}
      </div>
    </>
  );
}

export default DiceRoller;
