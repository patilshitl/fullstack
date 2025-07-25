import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Add() {

  const [amount, setAmount] = useState('');

  const handelSubmission = (e) =>{
    e.preventDefault();

    if(!amount) return;

    const existingBudgets = JSON.parse(localStorage.getItem('budgets')) || [];

    const newBudget = {
      id: Date.now(),
      amount: parseFloat(amount),
    };

    const updateBudget = [...existingBudgets, newBudget];
    localStorage.setItem('budgets', JSON.stringify(updateBudget));

    setAmount('');
  }

  return (
    <>
      <div className='addButtons'>
        

      <button className="addBudget" data-bs-toggle="modal" data-bs-target="#addBudgetModal">
          <img src="../src/assets/icons/plus-icon.png" alt="Add Budget" />
        Add Budget
      </button>

        <button className='addExpense' data-bs-toggle="modal" data-bs-target="#addExpenseModal">
          <img src="../src/assets/icons/plus-icon.png" alt="Add Expense" />
          <p>Add Expense</p>
        </button>
      </div>




      
      {/* Budget modal form */}
      <div className="modal fade" id="addBudgetModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="formModalLabel">Add Budget </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className='modal-body'>
              <form onSubmit={handelSubmission}>
                
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Amount*</label>
                  <input type="number" name="amount" id="amount" value={amount} onChange= {(e) =>setAmount (e.target.value)} className="form-control" required />
                </div>

              

           

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>

              </form>
               </div>
            </div>

          </div>
      </div>

      {/* Expense modal form */}
        <div className="modal fade" id="addExpenseModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="formModalLabel">Add Expense </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className='modal-body'>
              <form action="">
                <div className="mb-3">
                  <label htmlFor="expenseName" className="form-label">Expense Name*</label>
                  <input type="text" name="expenseName" id="expenseName" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="expenseDate" className="form-label">Date</label>
                  <input type="date" name="expenseDate" id="expenseDate" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="expenseCategory" className="form-label">Category*</label>
                  <select name="expenseCategory" id="expenseCategory" className="form-select" required>
                    <option value="">-- Select Category --</option>
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="utilities">Utilities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Amount*</label>
                  <input type="number" name="amount" id="amount" className="form-control" required />
                </div>

              </form>

            </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>

          </div>
        </div>
    </>
  );
}
