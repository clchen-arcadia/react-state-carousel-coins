We would plan for...


App --> CoinContainer (renders coin, AND renders the BUTTON and RESULTS <p>) --> Coin (image of coin)

Container --> CoinImage
        --> ResultsBox

Container

    busyLogicFn's()
    busyLogicFn's()
    busyLogicFn's()
    busyLogicFn's()

return(
    <CoinImage />
    <ResultsBox />
)

    CoinContainer accepts...
        states
            # flips
            # heads
            # tails

    renders... button FLIP ME.
    handleClick(){
        const isHeads = flipTheCoin() === 'heads' ? 1 : 0;
        const isTails = isHeads === 0 ? 1 : 0;
        setResultsObject({
            flips: resultsObject.flips + 1
            heads: resultsObject.heads + isHeads
            tails: resultsObject.heads + isTails
        })
    }


    handleClick() REFACTORED {
        setResultsObject(resultsObject.flips++)
        if(flipTheCoin() === 'heads') {
            setResultsObject(resultsObject.heads++)
        }
        else{
            setResultsObject(resultsObject.tails++)
        } //1 block of code. all runs through. THEN rerendering put on "JS todo list"
    }

closure. (the const's, the states) code retains identity.. UNTIL rerender...

return (
    <div>
        <img src={
            ternary {isHeads... === 'heads'}
            ? heads.src
            : tails.src
        }>
    </div>
)

_helpers.js
    /** accepts nothing, returns "heads" or "tails" only. randomly selected.
    */
    flipTheCoin()
