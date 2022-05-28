import React from 'react';
import $ from 'jquery';

function DiceRollerD10() {

  function RollDiceButtonClick(event: any) {
    if ($(`#Amount`) !== undefined && $(`#Amount`).val() !== "" &&
      $(`#MaxRoll`) !== undefined && $(`#MaxRoll`).val() !== "") {
      let MaxRoll = Number.parseInt(($(`#MaxRoll`).val()?.toString() || "0"));
      let diceCount = Number.parseInt(($(`#Amount`).val()?.toString() || "0"));
      let modAmount = $(`#Mod`).val() || "";
      let modArray: string[] = []
      if (modAmount) {
        modArray = modAmount.toString().split(',')
      }
      rollForSuccesses(MaxRoll, diceCount, modArray);
    }
  }

  function rollForSuccesses(MaxRoll: number, diceCount: number, modArray: string[]) {
    let values = []
    let sucesses = 0;
    let extraDiceCount = 0

    let numberToBeat = $(`#NumberToBeat`).val() || 0;
    for (let index = 0; index < diceCount; index++) {
      let value = Math.floor(Math.random() * MaxRoll);
      value += 1
      if (value === 1 && $("#1RemovesSuccess").is(':checked')) {
        sucesses -= 1;
      }
      if (value >= MaxRoll) {
        if ($("#explodeMax").is(':checked')) {
          extraDiceCount += 1;
        }
        if ($("#MaxCount2").is(':checked')) {
          sucesses += 1;
        }
      }
      value += +modArray[index] || 0;
      if (value >= numberToBeat) {
        sucesses += 1;
      }

      values.push(value);
    }

    for (let index = 0; index < extraDiceCount; index++) {
      let value = Math.floor(Math.random() * +MaxRoll);
      value += 1
      if (value >= MaxRoll) {
        if ($("#explodeMax").is(':checked')) {
          extraDiceCount += 1;
        }
        if ($("#MaxCount2").is(':checked')) {
          sucesses += 1;
        }
      }
      value += +modArray[index] || 0;
      if (value >= numberToBeat) {
        sucesses += 1;
      }

      values.push(value);
    }

    if ($("#result").text()) {
      $("#result").text($("#result").text() + "\n")
    }
    $("#result").text($("#result").text() + `D${MaxRoll}: ` + values.join(", "))
    $("#result").text($("#result").text() + "\nSuccesses = " + sucesses)
    return sucesses;
  }

  const clearResult = () => {
    $("#result").text("")
  }

  const clear = () => {
    $("#result").text("")
    $(`#Amount`).val("")
    $(`#Mod`).val("")
    $(`#NumberToBeat`).val("")
    $(`#MaxRoll`).val("")
  }

  return (
    <div className="form">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="explodeMax" />
        <label className="form-check-label" htmlFor="explodeMax">
          Explode Dice When Max Dice Roll Is Hit
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="1RemovesSuccess" />
        <label className="form-check-label" htmlFor="1RemovesSuccess">
          Roll of 1 Removes a Success, unless on exploded dice
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="MaxCount2" />
        <label className="form-check-label" htmlFor="MaxCount2">
          Max Rolls Counts as Two Successes
        </label>
      </div>
      <div className="row">
        <div className="col-2">
          <label className="form-label" htmlFor='NumberToBeat'>Number to Beat</label>
          <input type="text" onFocus={clearResult} className="form-control"
            id="NumberToBeat" aria-label="NumberToBeat" />
        </div>
        <div className="col-1">
          <label className="form-label" htmlFor='MaxRoll'>Max Roll</label>
          <input type="text" onFocus={clearResult} className="form-control"
            id="MaxRoll" aria-label="MaxRoll" />
        </div>
        <div className="col-2">
          <label className="form-label" htmlFor='Amount'>Amount of Dice</label>
          <input type="text" onFocus={clearResult} className="form-control"
            id="Amount" aria-label="Amount" />
        </div>
      </div>
      <div className="row">
        <div className="col">
        <label className="form-label" htmlFor='Mod'>Modifiers, comma seperated</label>
          <input type="text" onFocus={clearResult} className="form-control"
            id="Mod" aria-label="Mod" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="btn-group form">
            <button type="button" onClick={RollDiceButtonClick}>Roll</button>
            <div className="pull-right">
              <button type="button" onClick={clear}>Clear</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor='result'>Result</label>
          <textarea className="form-control" disabled={true} rows={8} id="result"></textarea>
        </div>
      </div>
    </div>
  );
}



export default DiceRollerD10;
