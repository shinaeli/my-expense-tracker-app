import React, {createContext, useReducer} from 'react';
import ExpenseReducer from './ExpenseReducer'


const initialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 },
          { id: 5, text: 'Food', amount: -450 },
          { id: 6, text: 'Site Transport Fare', amount: 2000 }
        ]
}

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(ExpenseReducer, initialState);

    // Actions
    const addExpense = transaction => {
        dispatch({type: "ADD_EXPENSE", payload: transaction})
    }
    const removeExpense = id => {
        dispatch({type: "DELETE_EXPENSE", payload: id})
    }

    return (<GlobalContext.Provider value={{transactions: state.transactions, addExpense, removeExpense}}>
        {children}
    </GlobalContext.Provider>)
}