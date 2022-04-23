import React from "react";
import {useSelector} from 'react-redux'
const ExpenseStats=(props)=>{
    const transactions=useSelector((state)=>{
        return state.transactions
    })
    const expense=transactions.filter(transObj=>transObj.transType==='Expense')
    const income=transactions.filter(transObj=>transObj.transType==='Income')
    const savings=()=>{
        let expenseAmount=0
        expense.forEach(obj=>{
           expenseAmount+= obj.amount
        })
        let incomeAmount=0
        income.forEach(obj=>{
            
            incomeAmount+= obj.amount
        })
        return incomeAmount-expenseAmount
    }
    return(
        <div>
            <h1>Savings : {savings()}</h1>
            <h1>Transaction : {transactions.length}</h1>
            <h1>Expenses : {expense.length}</h1>
            <h1>Income : {income.length}</h1>
        </div>
    )
}
export default ExpenseStats