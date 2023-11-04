import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './GlobalState/Context'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App;
