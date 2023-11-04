import React, {useContext} from 'react'
import {GlobalContext} from '../GlobalState/Context';
const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    let positives = [], negatives = [], totalPositives = 0, totalNegatives = 0;

   for(let {amount} of transactions) {
    if(amount > 0) {
        positives.push(amount);
    } else {
        negatives.push(amount);
    }
   }
    
    console.log(positives, negatives)

    for(let sum of positives) {
        totalPositives += sum;
    }

    for(let sum of negatives) {
        totalNegatives += sum;
    }


    console.log(totalPositives, totalNegatives);
  return (
    <div className="give-balance">
        <h4>your balance</h4>
        <h1>${(totalPositives + totalNegatives).toFixed(2)}</h1>
    </div>
  )
}

export default Balance