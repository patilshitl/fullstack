import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Expenselist() {

  const [expense, setExpense] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpense(saved);
  }, []);

  const deleteExpenseById = (id) => {
    const expense = JSON.parse(localStorage.getItem('expenses')) || [];
    const updatedExpenses = expense.filter(exp => exp.id !== id);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };
  
  const editExpenseById = (id) => {
    const expense = JSON.parse(localStorage.getItem('expenses')) || [];
    const selectedExpense = expense.find(exp => exp.id === id);

  };

  //edit expenses

  const [editExpense, setEditExpense] = useState(null)

  const handelEditChange = (e) =>{
    setEditExpense({
      ...editExpense,
      [e.target.name]: e.target.value
    });
  };

  


  const handelEditExpensesSubmission = (e) => {
    e.preventDefault();
    const allExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const updated = allExpenses.map(exp =>
      exp.id === editExpense.id ? editExpense : exp
    );
    localStorage.setItem('expenses', JSON.stringify(updated));
    setExpense(updated);
    setEditExpense(null);
  };
  
  return (
    <>
    <div className='listOfExpense'>
      <table>
        <tr>
            <th>Sr</th>
            <th className='expenseTh'>Expense</th>
            <th>Amount</th>
            <th>Edit / Delete</th>
        </tr>
          {expense.map((exp, index) => (
            
            <tr>
                <td>{exp.id}</td>
                <td>{exp.category}</td>
                <td>{exp.amount}</td>
                <td>
                    <button data-bs-toggle="modal" data-bs-target="#editExpense" onClick={() => setEditExpense(exp)}>Edit</button>
                    <button data-bs-toggle="modal" data-bs-target="#deleteExpense" >Delete</button>
                </td>
            </tr>
          ))}
      </table>
    </div>

      {editExpense && (

        <div className="modal fade" id="editExpense" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="formModalLabel">Edit Expense </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className='modal-body'>
              <form action="">
                <div className="mb-3">
                  <label htmlFor="expenseName" className="form-label">Expense Name*</label>
                  <input type="text" value={editExpense.name} name="name" id="expenseName" onChange={handelEditChange} className="form-control" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="expenseDate" className="form-label">Date</label>
                  <input type="date" value={editExpense.date} name="date" id="expenseDate" onChange={handelEditChange}className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="expenseCategory" className="form-label">Category*</label>
                  <select name="category" onChange={handelEditChange} id="expenseCategory" className="form-select" value={editExpense.category} required>
                    <option value="" disabled selected>-- Select Category --</option>
                    <option value="food">Food & Drinks</option>
                    <option value="travel">Travel</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Amount*</label>
                  <input type="number" name="amount" onChange={handelEditChange} value={editExpense.amount} id="amount" className="form-control" required />
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary" onClick={handelEditExpensesSubmission}>Submit</button>
                </div>
              </form>

            </div>

             
            </div>

          </div>
        </div>
      )};

        <div className="modal fade" id="deleteExpense" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
          <div className="modal-dialog">
          <div className="modal-content">


            <div className='modal-body'>
                <div className="mb-3">
                  <h1>Are you sure</h1>

                  <h4>You wont be able to revert this!</h4>
                </div>

            </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-danger" value={localStorage.getItem('updatedExpenses')} onClick={deleteExpenseById}>Submit</button>
              </div>
            </div>

          </div>
        </div>
    </>
  )
}