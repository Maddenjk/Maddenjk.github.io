import React from 'react';
import $ from 'jquery';

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

  const GenerateDice = () => {
    let diceArray: any = []
    for (let index = 0; index < diceTypeArray.length; index++) {
      let diceType = diceTypeArray[index];
      let rowKey = `D${diceType}Key`
      let diceTypeLabel = `D${diceType}`
      let textLabel = `D${diceType}Text`;
      let AmountLabel = `D${diceType}Amount`;
      let ModLabel = `D${diceType}Mod`;
      diceArray.push(
        <div className="row" key={rowKey} >
          <div className="col-2">
            <p aria-label={textLabel} id={textLabel}>{diceTypeLabel}</p>
          </div>
          <div className="col-3">
            <input type="text" key={AmountLabel} onFocus={clearResult} className="form-control"
              id={AmountLabel} aria-label={AmountLabel} value={amountofDices[index]}
              onChange={(event) => { amountofDiceChange(index, event.target.value) }} />
          </div>
          <div className="col-7">
            <input type="text" key={ModLabel} onFocus={clearResult} className="form-control"
              id={ModLabel} aria-label={ModLabel} value={modifierStrings[index]}
              onChange={(event) => { modifiersChange(index, event.target.value) }} />
          </div>
        </div>)
    }
    return diceArray
  }

  return (
    <div>
      <div className="row">
        <p className="col-2">Type</p>
        <p className="col-3">Amount of Dice</p>
        <p className="col-7">Modifiers (Space Seperated)</p>
      </div>
      <>{GenerateDice() || null}</>
      <div className="row">
        <div className="col-1">
          <div className="btn-group">
            <button type="button" className="primaryButton bg-primary" onClick={RollDiceButtonClick}>Roll</button>
            <div className="pull-right">
              <button type="button" className="secondaryButton" onClick={clear}>Clear</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <label htmlFor='result'>Result</label>
        <textarea className="form-control" value={results} disabled={true} rows={8} id="result"></textarea>
      </div>
      {/* TODO Add Custom die logic here */}
    </div>
  );
}

export default DiceRollerD20;
