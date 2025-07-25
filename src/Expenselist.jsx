import React from 'react'

export default function Expenselist() {
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
        <tr>
            <td>1</td>
            <td>travel</td>
            <td>2000</td>
            <td>
                <button data-bs-toggle="modal" data-bs-target="#editExpense">Edit</button>
                <button data-bs-toggle="modal" data-bs-target="#deleteExpense">Delete</button>
            </td>
        </tr>
      </table>
    </div>

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
                <button type="submit" className="btn btn-danger">Submit</button>
              </div>
            </div>

          </div>
        </div>
    </>
  )
}
