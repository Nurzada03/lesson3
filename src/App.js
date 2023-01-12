import "./App.css";

import { Expenses } from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";
import { useState } from "react";




function App() {

const [expenses, setExpenses] = useState([
  {
    title: "Toilet paper",
    price: 300,
    date: new Date(),
  },
  {
    title: "Books",
    price: 800,
    date: new Date(),
  },
]);

const addNewExpenseHadler = (data) =>{
  const upExpenses = [...expenses]
  upExpenses.push(data)
  setExpenses(upExpenses)
}

  return (
    <div className="App">
      <div>
         <div className="inner-container">
        <NewExpense onNewExpenseAdd={addNewExpenseHadler} />
      </div>

      <Expenses expenses={expenses} />
      </div>
     
    </div>
  );
}

export default App;


