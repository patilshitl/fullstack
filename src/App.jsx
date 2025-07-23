import Add from './Add'
import './App.css'
import Budget from './Budget'
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

        <div>
          <Filter />
          <Add />
        </div>
        
      </div>
    </>
  )
}

export default App
