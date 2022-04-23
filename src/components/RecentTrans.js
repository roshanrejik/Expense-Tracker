import React from "react";
import {useSelector} from 'react-redux'

const RecentTrans=(props)=>{
    const transactions=useSelector((state)=>{
        return state.transactions
    })
    return(
        <div>
            <h1>Reacnt Transaction - (Last 5)</h1>
            {
                transactions.slice(-5).map(transObj=>{
                    return(
                        <h2 key={transObj.id}>{transObj.transType}-{transObj.amount}-{transObj.notes}</h2>
                    )
                })
            }
        </div>
    )
}
export default RecentTrans