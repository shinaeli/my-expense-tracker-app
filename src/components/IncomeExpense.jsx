import React, { useContext } from 'react'
import {GlobalContext} from '../GlobalState/Context';

const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext)

    let positives = [], negatives = [], totalPositives = 0, totalNegatives = 0;

   for(let {amount} of transactions) {
    if(amount > 0) {
        positives.push(amount)
    } else {
        negatives.push(amount)
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
    <div className="show-inc-exp">
        <div>
            <h4>income</h4>
            <p className="money plus">${totalPositives.toFixed(2)}</p>
        </div>
        <div>
            <h4>expense</h4>
            <p className="money minus">${totalNegatives.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default IncomeExpense