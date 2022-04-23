import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addToTrans } from "../action/transAction";
const TransForm=(props)=>{
    const [transType,setTransType]=useState('')
    const [amount,setAmount]=useState('')
    const [notes,setNotes]=useState('')
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        if(e.target.name==='transType'){
            setTransType(e.target.value)
        }else if(e.target.name==='amount'){
            setAmount(Number(e.target.value))
        }else if(e.target.name==='notes'){
            setNotes(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const transObj={
            id:Number(new Date()),
            transType,
            amount,
            notes
        }
        dispatch(addToTrans(transObj))
        setTransType('')
        setAmount('')
        setNotes('')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <select value={transType} onChange={handleChange} name='transType'>
                    <option>Transaction Type</option>
                    <option>Expense</option>
                    <option>Income</option>
                </select><br/><br/>
                <input type='text' placeholder="Amount"  value={amount} onChange={handleChange} name='amount'/><br/><br/>
                <textarea cols="30" rows="6"  value={notes} onChange={handleChange} name='notes'></textarea><br/><br/>
                <input type='submit'value='Submit'/>
            </form>
        </div>
    )
}
export default TransForm