import React from 'react'
import ExpenseStats from './ExpenseStats'
import RecentTrans from './RecentTrans'
import TransForm from './TransForm'
const TackerContainer=(props)=>{
    return(
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseStats/>
            <TransForm/>
            <RecentTrans/>
        </div>
    )
}
export default TackerContainer