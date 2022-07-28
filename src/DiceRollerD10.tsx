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
            value += +autoSuccessString || 0;
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
        <div className="form">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="ExplodeMax"
                    onChange={(event) => { setExplodeMax(event.target.checked) }} />
                <label className="form-check-label" htmlFor="ExplodeMax">
                    Explode Dice When Max Dice Roll Is Hit
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="OneRemovesSuccess"
                    onChange={(event) => { setOneRemovesSuccess(event.target.checked) }} />
                <label className="form-check-label" htmlFor="OneRemovesSuccess">
                    Roll of 1 Removes a Success, unless on exploded dice
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="MaxCountsTwice"
                    onChange={(event) => { setMaxCountsTwice(event.target.checked) }} />
                <label className="form-check-label" htmlFor="MaxCountsTwice">
                    Max Rolls Counts as Two Successes
                </label>
            </div>
            <div className="row">
                <div className="col-xl-5 col-lg-5 col-mid-5">
                    <label className="form-label" htmlFor='NumberToBeat'>Number to Beat</label>
                    <input type="text" onFocus={clearResult} className="form-control col-3"
                        id="NumberToBeat" aria-label="NumberToBeat" value={numberToBeat}
                        onChange={(e) => { setNumberToBeat(e.target.value) }} />
                </div>
            </div>
            <div className="row">
                <div style={{width: 132, marginLeft: 16}}>
                    <label className="form-label" htmlFor="MaxRoll">Dice Type</label>
                    <div className='form-inline'>
                        <div className="input-group-prepend">
                            <div className="input-group-text">D</div>
                        </div>
                        <input type="text" className="form-control col 1" value={maxRoll}
                            onChange={(e) => { setMaxRoll(e.target.value) }}
                            id="MaxRoll" aria-label="MaxRoll" />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-xl-5 col-lg-5 col-mid-5">
                    <label className="form-label" htmlFor='Amount'>Amount of Dice</label>
                    <input type="text" onFocus={clearResult} className="form-control col-3" value={amountOfDice}
                        onChange={(e) => { setAmountOfDice(e.target.value) }}
                        id="Amount" aria-label="Amount" />
                </div>
            </div>
            <div className="row">
                <div className="col-xl-5 col-lg-5 col-mid-5 mr-3 mb-2">
                    <label className="form-label" htmlFor='AutoSuccess'>Auto Successes</label>
                    <input type="text" onFocus={clearResult} className="form-control col-3" value={autoSuccessString}
                        onChange={(e) => { setAutoSuccessString(e.target.value) }}
                        id="AutoSuccess" aria-label="AutoSuccess" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="btn-group form">
                        <button type="button" className="primaryButton bg-primary" onClick={rollDice}>Roll</button>
                        <div className="pull-right">
                            <button type="button" className="secondaryButton" onClick={clear}>Clear</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor='result'>Result</label>
                    <textarea className="form-control" disabled={true} rows={8} id="result" value={results}></textarea>
                </div>
            </div>
        </div>
    );
}



export default DiceRollerD10;
