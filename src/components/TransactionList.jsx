import React, { useContext } from 'react'
import Transaction from './Transaction';
import { GlobalContext } from '../GlobalState/Context'

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)

  return (
    <div>
        <h3>History</h3>
        <ul className='list'>
          {transactions.map(transaction => <Transaction  id={transaction.id} text={transaction.text} amount={transaction.amount} />)}
          </ul>
    </div>
  )
}

export default TransactionList