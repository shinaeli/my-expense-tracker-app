export default (state, action) => {
    if(action.type === 'ADD_EXPENSE') {
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        };
    }
    else if(action.type === "DELETE_EXPENSE") {
        let newTransactions = state.transactions.filter(transaction => transaction.id !== action.payload);
        return {
            ...state,
            transactions: [...newTransactions]
        }
    }
    else {
        return state;
    }
}