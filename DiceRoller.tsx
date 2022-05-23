import React from 'react';
import $ from 'jquery';

function DiceRoller() {

  function RollDiceButtonClick(event: any) {
    let resultTotal = 0
    let successes = 0
    let diceTypeArray = ["2", "4", "6", "8", "10", "12", "20", "100"]
    diceTypeArray.forEach(diceType => {
      if ($(`#D${diceType}Amount`) !== undefined && $(`#D${diceType}Amount`).val() !== "") {
        if($(`#D${diceType}NumberToBeat`).val() === ""){
          resultTotal += rollForTotal(diceType);
        }
        else{
          successes += rollForSuccesses(diceType);
        }
      }
      $("#total").text(resultTotal)
      $("#successes").text(successes)
      console.log(resultTotal)
    })
  }

  function rollForTotal(diceType: string) {
    let values = []
    let diceRollTotal = 0;
    let diceCount = $(`#D${diceType}Amount`).val() || 0;
    let modAmount = $(`#D${diceType}Mod`).val() || 0;
    for (let index = 0; index < diceCount; index++) {
      let value = Math.floor(Math.random() * +diceType);
      value += 1
      value += +modAmount;
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

  function rollForSuccesses(diceType: string) {
    let values = []
    let sucesses = 0;
    let diceCount = Number.parseInt(($(`#D${diceType}Amount`).val()?.toString() || "0")) ;
    let modAmount = $(`#D${diceType}Mod`).val() || 0;
    let numberToBeat = $(`#D${diceType}NumberToBeat`).val() || 0;
    for (let index = 0; index < diceCount; index++) {
      let value = Math.floor(Math.random() * +diceType);
      value += 1
      if(value === 1 && $("#1RemovesSuccess").is(':checked')){
        sucesses -= 1;
      }
      if(value >= +diceType){
        if($("#explodeMax").is(':checked')){
          diceCount += 1;
        }
        if($("#MaxCount2").is(':checked')){
          sucesses += 1;
        }
      }
      value += +modAmount;
      if(value >= numberToBeat){
        sucesses += 1;
      }

      values.push(value);
    }
    console.log(values)
    if ($("#result").text()) {
      $("#result").text($("#result").text() + "\n")
    }
    $("#result").text($("#result").text() + ` D${diceType} ` + values.toString())
    $("#result").text($("#result").text() + "\nSuccesses = " + sucesses)
    return sucesses;
  }

  const clearResult = () => {
    $("#result").text("")
    $("#total").text("")
    $("#successes").text("")
  }

  const clear = () => {
    $("#result").text("")
    let diceTypeArray = ["2", "4", "6", "8", "10", "12", "20", "100"]
    diceTypeArray.forEach(diceType => {
      $(`#D${diceType}Amount`).val("")
      $(`#D${diceType}Mod`).val("")
      $(`#D${diceType}NumberToBeat`).val("")
    })
  }

  return (
    <div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="explodeMax" />
          <label className="form-check-label" htmlFor="explodeMax">
            Explode Max
          </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="1RemovesSuccess" />
          <label className="form-check-label" htmlFor="1RemovesSuccess">
            1's Remove Successes
          </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="MaxCount2" />
          <label className="form-check-label" htmlFor="MaxCount2">
            Max Counts as Two Successes
          </label>
      </div>
      <div className="row">
        <p className="col-1">Type</p>
        <p className="col-1">Amount</p>
        <p className="col-1">Modifier</p>
        <p className="col-2">Number to Beat</p>
      </div>
      {/* D2 */}
      <div className="row">
        <div className="col-1">
          <p aria-label='D2Text' className="D2Text">D2</p>
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D2Amount" aria-label='D2Amount' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D2Mod" aria-label='D2Mod' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D2NumberToBeat" aria-label='D2NumberToBeat' />
        </div>
      </div>
      {/* D4 */}
      <div className="row">
        <div className="col-1">
          <p aria-label='D4Text' id="D4Text">D4</p>
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D4Amount" aria-label='D4Amount' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D4Mod" aria-label='D4Mod' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D4NumberToBeat" aria-label='D4NumberToBeat' />
        </div>
      </div>
      {/* D6 */}
      <div className="row">
        <div className="col-1">
          <p aria-label='D6Text' id="D6Text">D6</p>
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D6Amount" aria-label='D6Amount' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D6Mod" aria-label='D6Mod' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D6NumberToBeat" aria-label='D6NumberToBeat' />
        </div>
      </div>
      {/* D8 */}
      <div className="row">
        <div className="col-1">
          <p aria-label='D8Text' id="D8Text">D8</p>
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D8Amount" aria-label='D8Amount' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D8Mod" aria-label='D8Mod' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D8NumberToBeat" aria-label='D8NumberToBeat' />
        </div>
      </div>
      {/* D10 */}
      <div className="row">
        <div className="col-1">
          <p aria-label='D10Text' id="D19Text">D10</p>
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D10Amount" aria-label='D10Amount' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D10Mod" aria-label='D10Mod' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D10NumberToBeat" aria-label='D10NumberToBeat' />
        </div>
      </div>
      {/* D12 */}
      <div className="row">
        <div className="col-1">
          <p aria-label='D12Text' id="D12Text">D12</p>
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D12Amount" aria-label='D12Amount' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D12Mod" aria-label='D12Mod' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D12NumberToBeat" aria-label='D12NumberToBeat' />
        </div>
      </div>
      {/* D20 */}
      <div className="row">
        <div className="col-1">
          <p aria-label='D20Text' id="D20Text">D20</p>
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D20Amount" aria-label='D20Amount' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D20Mod" aria-label='D20Mod' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D20NumberToBeat" aria-label='D20NumberToBeat' />
        </div>
      </div>
      {/* D100 */}
      <div className="row">
        <div className="col-1">
          <p aria-label='D100Text' id="D100Text">D100</p>
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D100Amount" aria-label='D100Amount' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D100Mod" aria-label='D100Mod' />
        </div>
        <div className="col-1">
          <input type="text" onFocus={clearResult} className="form-control" id="D100NumberToBeat" aria-label='D100NumberToBeat' />
        </div>
      </div>
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
        <label htmlFor='total'>Total</label>
        <div className="col-1" id="total"><p></p></div>
      </div>
      <div className="row">
        <label htmlFor='successes'>Successes</label>
        <div className="col-1" id="successes"><p></p></div>
      </div>
      <div className="row">
        <label htmlFor='result'>Result</label>
        <textarea className="form-control" rows={8} id="result"></textarea>
      </div>
      {/* TODO Add Custom die logic here */}
    </div>
  );
}



export default DiceRoller;
