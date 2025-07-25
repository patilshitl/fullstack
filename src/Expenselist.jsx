import React from 'react'

export default function Expenselist() {
  return (
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
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
      </table>
    </div>
  )
}
