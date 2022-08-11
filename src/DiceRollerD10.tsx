import { Button, ButtonGroup, Card } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React from 'react';

function DiceRollerD10() {

    // Values set by the user
    let [explodeMax, setExplodeMax] = React.useState(false)
    let [oneRemovesSuccess, setOneRemovesSuccess] = React.useState(false)
    let [maxCountsTwice, setMaxCountsTwice] = React.useState(false)
    let [numberToBeat, setNumberToBeat] = React.useState("")
    let [amountOfDice, setAmountOfDice] = React.useState("")
    let [maxRoll, setMaxRoll] = React.useState("")
    let [autoSuccessString, setAutoSuccessString] = React.useState("")

    // Calculated values
    let [results, setResults] = React.useState("")

    function rollDice() {
        let values = []
        let sucesses = 0;
        let extraDiceCount = 0

        for (let index = 0; index < +amountOfDice || 0; index++) {
            let value = Math.floor(Math.random() * +maxRoll);
            value += 1
            console.log(explodeMax)
            if (value === 1 && oneRemovesSuccess) {
                sucesses -= 1;
            }
            if (value >= +maxRoll) {
                if (explodeMax) {
                    extraDiceCount += 1;
                }
                if (maxCountsTwice) {
                    sucesses += 1;
                }
            }
            if (value >= +numberToBeat) {
                sucesses += 1;
            }

            values.push(value);
        }

        for (let index = 0; index < extraDiceCount; index++) {
            let value = Math.floor(Math.random() * +maxRoll);
            value += 1
            if (value >= +maxRoll) {
                if (explodeMax) {
                    extraDiceCount += 1;
                }
                if (maxCountsTwice) {
                    sucesses += 1;
                }
            }
            if (value >= +numberToBeat) {
                sucesses += 1;
            }

            values.push(value);
        }

        // Add auto successes
        sucesses += +autoSuccessString || 0;

        let newResults = results
        if (newResults) {
            newResults += "\n"
        }
        newResults += `D${maxRoll}: ` + values.join(", ")
        newResults += "\nSuccesses = " + sucesses
        setResults(newResults)
    }

    const clearResult = () => {
        setResults("")
    }

    const clear = () => {
        setNumberToBeat("")
        setAmountOfDice("")
        setAutoSuccessString("")
        setMaxRoll("")
        setResults("")
    }

    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox id="ExplodeDice" value=""
                    onChange={(event) => { setExplodeMax(event.target.checked) }} />}
                    label="Explode Dice When Max Dice Roll Is Hit" />
                <FormControlLabel control={<Checkbox id="OneRemovesSuccess" value=""
                    onChange={(event) => { setOneRemovesSuccess(event.target.checked) }} />}
                    label="Roll of 1 Removes a Success, unless on exploded dice" />
                <FormControlLabel control={<Checkbox id="MaxRollTwoSuccess" value=""
                    onChange={(event) => { setMaxCountsTwice(event.target.checked) }} />}
                    label="Max Rolls Counts as Two Successes" />

                <TextField id="NumberToBeat" label="Number to Beat" variant="outlined"
                    value={numberToBeat}
                    sx={{width: '25ch' }}
                    onFocus={clearResult}
                    onChange={(e) => { setNumberToBeat(e.target.value) }} />
                <TextField
                    label="Dice Type"
                    id="MaxRoll"
                    sx={{ mt: 2, width: '25ch' }}
                    value={maxRoll}
                    onFocus={clearResult}
                    onChange={(e) => { setMaxRoll(e.target.value) }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">D</InputAdornment>,
                    }}
                />
                <TextField id="Amount" label="Amount of Dice" variant="outlined"
                    value={amountOfDice}
                    sx={{mt: 2, width: '25ch' }}
                    onFocus={clearResult}
                    onChange={(e) => { setAmountOfDice(e.target.value) }} />
                <TextField id="AutoSuccesses" label="Auto Successes" variant="outlined"
                    value={autoSuccessString}
                    sx={{my: 2, width: '25ch' }}
                    onFocus={clearResult}
                    onChange={(e) => { setAutoSuccessString(e.target.value) }} />   
                <ButtonGroup sx={{mb: 2}}>
                    <Button variant="contained" onClick={rollDice}>Roll</Button>
                    <Button variant="text" onClick={clear}>Clear</Button>
                </ButtonGroup> 
                <TextField label="Result" multiline disabled={true} rows={8} id="result" value={results}></TextField>
            </FormGroup>
        </div>
    );
}



export default DiceRollerD10;
