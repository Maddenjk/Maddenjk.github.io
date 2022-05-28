import React from 'react';
import $ from 'jquery';

function DiceRollerD20() {

  let diceTypeArray = ["2", "4", "6", "8", "10", "12", "20", "100"]

  function RollDiceButtonClick(event: any) {
    diceTypeArray.forEach(diceType => {
      if ($(`#D${diceType}Amount`) !== undefined && $(`#D${diceType}Amount`).val() !== "") {
        let diceCount = Number.parseInt(($(`#D${diceType}Amount`).val()?.toString() || "0"));
        let modAmount = $(`#D${diceType}Mod`).val() || "";
        let modArray: string[] = []
        if (modAmount){
          modArray = modAmount.toString().split(',')
        }
           rollForTotal(diceType, diceCount, modArray);
      }
    })
  }

  function rollForTotal(diceType: string, diceCount: number, modArray: string[]) {
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
    if ($("#result").text()) {
      $("#result").text($("#result").text() + "\n")
    }
    $("#result").text($("#result").text() + ` D${diceType} ` + values.toString())
    $("#result").text($("#result").text() + "\nTotal = " + diceRollTotal)
    return diceRollTotal;
  }
  
  const clearResult = () => {
    $("#result").text("")
  }

  const clear = () => {
    $("#result").text("")
    diceTypeArray.forEach(diceType => {
      $(`#D${diceType}Amount`).val("")
      $(`#D${diceType}Mod`).val("")
    })
  }

  const GenerateDice = () => {
    let diceArray: any = []
    diceTypeArray.forEach(diceType => {
      let diceTypeLabel = `D${diceType}`
      let textLabel = `D${diceType}Text`;
      let AmountLabel = `D${diceType}Amount`;
      let ModLabel = `D${diceType}Mod`;
      diceArray.push(
        <div className="row">
          <div className="col-2">
            <p aria-label={textLabel} id={textLabel}>{diceTypeLabel}</p>
          </div>
          <div className="col-3">
            <input type="text" onFocus={clearResult} className="form-control" 
            id={AmountLabel} aria-label={AmountLabel} />
          </div>
          <div className="col-7">
            <input type="text" onFocus={clearResult} className="form-control" 
            id={ModLabel} aria-label={ModLabel} />
          </div>
        </div>)
    })
    return diceArray
  }

  return (
    <div>
      <div className="row">
        <p className="col-2">Type</p>
        <p className="col-3">Amount of Dice</p>
        <p className="col-7">Modifiers (comma seperated)</p>
      </div>
      <>{GenerateDice() || null}</>
      <div className="row">
        <div className="col-1">
          <div className="btn-group">
            <button type="button" onClick={RollDiceButtonClick}>Roll</button>
            <div className="pull-right">
              <button type="button" onClick={clear}>Clear</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <label htmlFor='result'>Result</label>
        <textarea className="form-control" disabled={true} rows={8} id="result"></textarea>
      </div>
      {/* TODO Add Custom die logic here */}
    </div>
  );
}

export default DiceRollerD20;
