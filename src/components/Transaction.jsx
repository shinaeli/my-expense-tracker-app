import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalState/Context';

const Transaction = ({id, text, amount}) => {
  const {removeExpense} = useContext(GlobalContext)
  const sign = amount < 0 ? '-' : '+';
  return (
    <div>
        <li key={id} className={`${amount < 0 ? 'minus' : 'plus'}`}>{text} <span>{sign}{Math.abs(amount)}</span><button onClick={() => removeExpense(id)} className="delete-btn">x</button></li>
    </div>
  )
}

export default Transaction