import React, { useState, useContext } from 'react'
import { GlobalContext } from '../GlobalState/Context'
const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {addExpense} = useContext(GlobalContext)

    const handleSubmit = e => {
        e.preventDefault()

        const newTransaction = {id: Math.floor(Math.random() * 100000), text, amount: Number(amount)}

        addExpense(newTransaction)
        setText('')
        setAmount(0)
    }
  return (
    <div>
        <h3>Add new transaction</h3>
        <form action="" onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="name">Text</label>
                <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Enter a text...' />
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Amount</label>
                <input type="text" value={amount} onChange={e => setAmount(e.target.value)} placeholder='Enter numbers...' />
            </div>
            <button className='btn'>Add transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction