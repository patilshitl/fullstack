import { useEffect, useState } from 'react'
import './App.css'
import Budget from './Budget'
import Expenselist from './Expenselist'
import Filter from './Filter'
import Mainbody from './Mainbody'
import Nav from './Nav'

function App() {

  //add budgets
  const [budgets, setBudget] = useState([]);
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpense(savedExpenses);
  }, []);

  useEffect(() => {
    const savedBudgets = JSON.parse(localStorage.getItem('budgets')) || [];
    setBudget(savedBudgets);
  }, []);

  const handelNewBudget = (newBudget) => {
    const updated = [...budgets, newBudget];
    setBudget(updated);
    localStorage.setItem('budgets', JSON.stringify(updated));
  };

  // Calculate total budget by summing all budget values
  const totalBudget = budgets.reduce((acc, curr) => acc + Number(curr.amount || 0), 0);
  

  const handelNewExpenses = (newExpense) =>{
    const updated = [...expense, newExpense];
    setExpense(updated);
    localStorage.setItem('expenses', JSON.stringify(updated));
  };

  const totalExpense = expense.reduce((acc, curr) => acc + Number(curr.amount || 0), 0);

  
  //remaining budget

  const totalRemainBudget = totalBudget-totalExpense;



  

  return (
    <>
      <div className='main'>
        <Nav />
        <hr />
        <Mainbody />
        <div className='budgetDiv'>
          <Budget title="Total Budget" amount={totalBudget} />
          <Budget title="Total Expense" amount={totalExpense}/>
          <Budget title="Remaining Budget" amount={totalRemainBudget}/>
        </div>

        <div className=''>
          <Filter />
        </div>

        <Expenselist />
      </div>
    </>
  );
}

export default App;
