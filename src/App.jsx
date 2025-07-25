import './App.css'
import Budget from './Budget'
import Expenselist from './Expenselist'
import Filter from './Filter'
import Mainbody from './Mainbody'
import Nav from './Nav'

function App() {

  return (
    <>
      <div className='main'>
        <Nav />
        <hr />
        <Mainbody />
        <div className='budgetDiv'>
          <Budget title="Total Budget"/>
          <Budget title="Total Expense"/>
          <Budget title="Remaining Budget"/>
        </div>

        <div className=''>
          <Filter />
        </div>
        

        <Expenselist />
      </div>
    </>
  )
}

export default App
