import React from 'react'

export default function Budget(Props) {
  return (
    <div className='budgetBox'>
      <p>{Props.title}</p>
      <h3>{Props.amount}</h3>
    </div>
  )
}
