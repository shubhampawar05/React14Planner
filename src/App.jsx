import { useState } from 'react'
import './App.css'
import Budget from './Componets/Budget/Budget'
import Expense from './Componets/Expense/Expense'
import ShowExpense from './Componets/ShowExpense/ShowExpense'
import { Context } from './Componets/Context/Contex'

function App() {
  const [ expense , setExpence ]= useState(0);
  const [data ,setData ]= useState([]);

  

  return (
    <Context.Provider value={{setExpence,expense,setData,data} }>
      {/* <Budget expense={expense}/> */}
      <Budget />
      {/* <ShowExpense data={data} setData={setData}/> */}
      <ShowExpense />
      {/* <Expense setExpence={setExpence}  setData={setData}/> */}
      <Expense />
    </Context.Provider>
  )
}

export default App
