import React from 'react'

export default function Filter() {
  return (
    <div className='filters'>
      <div className='search'>
            <img src='../src/assets/icons/search-icon.png'/>
            <p>search</p>
      </div>

      <div className='expenses'>
            <p>All Expenses</p>
      </div>

      <div className='food'>
            <img src='../src/assets/icons/food-icon.png' />
            <p>Food & Drinks</p>
      </div>

      <div className='groseries'>
            <img src='../src/assets/icons/grocery-icon.png' />
            <p>Groceries</p>
      </div>

      <div className='travel'>
            <img src='../src/assets/icons/travel-icon.png' />
            <p>Travel</p>
      </div>

      <div className='health'>
            <img src='../src/assets/icons/health-icon.png' />
            <p>Health</p>
      </div>
    </div>
  )
}
