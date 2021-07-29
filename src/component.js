import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import actions from './redux/actions'
// const {fetchdata}=actions
function Component() {
const dispatch=useDispatch()

    const state_data = useSelector(state => state.SubmitHandler.data)
    console.log(state_data)
    const Clickhandler=()=>{
        dispatch(actions.fetchdata())

    }
    return (
        <div>
            {state_data?state_data.map(data=><h1>{data.title}</h1>):''
            
        
        }
             <button onClick={Clickhandler} >Click to SEE Authors</button>
        </div>
    )
}

export default Component
