import React from 'react';
import $ from 'jquery';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';

function DiceRollerD20() {

  // Values set by the user
  let [amountofDices, setAmountofDices] = React.useState(["", "", "", "", "", "", "", ""])
  let [modifierStrings, setModifierStrings] = React.useState(["", "", "", "", "", "", "", ""])
  let [update, setUpdate] = React.useState(0)
  // Calculated values
  let [results, setResults] = React.useState("")

  let diceTypeArray = ["2", "4", "6", "8", "10", "12", "20", "100"]

  function RollDiceButtonClick(event: any) {
    let currentResults = ""
    for (let index = 0; index < diceTypeArray.length; index++) {
      let diceType = diceTypeArray[index];
      if ($(amountofDices[index]) !== undefined && amountofDices[index] !== "") {
        let diceCount = Number.parseInt((amountofDices[index] || "0"));
        let modAmount = modifierStrings[index] || "";
        let modArray: string[] = []
        if (modAmount) {
          modArray = modAmount.toString().split(' ')
        }
        currentResults = rollForTotal(diceType, diceCount, modArray, currentResults);
      }
    }
    setResults(currentResults)
  }

  function rollForTotal(diceType: string, diceCount: number, modArray: string[], currentResults: string) {
    let values = []
    let diceRollTotal = 0;
    for (let index = 0; index < diceCount; index++) {
      let value = Math.floor(Math.random() * +diceType);
      value += 1
      value += +modArray[index] || 0;
      diceRollTotal += value;
      values.push(value);
    }
    console.log(values)
    let newResults = currentResults
    if (newResults) {
      newResults += "\n"
    }
    newResults += ` D${diceType} ` + values.toString()
    newResults += "\nTotal = " + diceRollTotal
    return newResults
  }

  const clearResult = () => {
    setResults("")
  }

  const clear = () => {
    let emptyArray = []
    for (let index = 0; index < diceTypeArray.length; index++) {
      emptyArray.push("")
    }
    setAmountofDices([...emptyArray])
    setModifierStrings([...emptyArray])
    setResults("")
  }

  const amountofDiceChange = (index: number, value: string) => {
    let newAmountofDices = amountofDices
    newAmountofDices[index] = value
    setAmountofDices(newAmountofDices)
    setUpdate(update + 1)
  }

  const modifiersChange = (index: number, value: string) => {
    let newModifierStrings = modifierStrings
    newModifierStrings[index] = value
    setModifierStrings(newModifierStrings)
    setUpdate(update + 1)
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fafafa',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    borderWidth: 0,
    borderRadius: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const PItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fafafa',
    ...theme.typography.body2,
    padding: theme.spacing(1.11),
    borderWidth: 0,
    borderRadius: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const HeaderItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fafafa',
    ...theme.typography.body2,
    height: 50,
    borderWidth: 0,
    borderRadius: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const GenerateDice = () => {
    let diceArray: any = []
    for (let index = 0; index < diceTypeArray.length; index++) {
      let diceType = diceTypeArray[index];
      let diceTypeLabel = `D${diceType}`
      let textLabel = `D${diceType}Text`;
      let AmountLabel = `D${diceType}Amount`;
      let ModLabel = `D${diceType}Mod`;
      diceArray.push(
        <Grid container spacing={0}>
          <Grid item xs={2}>
          <PItem>
            <p aria-label={textLabel} id={textLabel}>{diceTypeLabel}</p>
            </PItem>
          </Grid>
          <Grid item xs={3}>
          <Item>
            <input type="text" key={AmountLabel} onFocus={clearResult} className="form-control"
              id={AmountLabel} aria-label={AmountLabel} value={amountofDices[index]}
              onChange={(event) => { amountofDiceChange(index, event.target.value) }} />
              </Item>
          </Grid>
          <Grid item xs>
          <Item>
            <input type="text" key={ModLabel} onFocus={clearResult} className="form-control"
              id={ModLabel} aria-label={ModLabel} value={modifierStrings[index]}
              onChange={(event) => { modifiersChange(index, event.target.value) }} />
              </Item>
          </Grid>
        </Grid>)
    }
    return diceArray
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={2}>
            <HeaderItem><p>Type</p></HeaderItem>
          </Grid>
          <Grid item xs={3}>
            <HeaderItem><p>Amount of Dice</p></HeaderItem>
          </Grid>
          <Grid item xs>
            <HeaderItem><p>Modifiers (Space Seperated)</p></HeaderItem>
          </Grid>
        </Grid>
      <>{GenerateDice() || null}</>
      </Box>
      <ButtonGroup sx={{ mb: 2 }}>
        <Button variant="contained" onClick={RollDiceButtonClick}>Roll</Button>
        <Button variant="text" onClick={clear}>Clear</Button>
      </ButtonGroup>
      <FormGroup>
        <TextField label="Result" multiline disabled={true} rows={8} id="result" value={results}></TextField>
      </FormGroup>
      {/* TODO Add Custom die logic here */}
    </div >
  );
}

export default DiceRollerD20;
