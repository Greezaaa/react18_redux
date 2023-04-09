import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showMsg, hideMsg, selectMsg, setMsg }  from './reducer';

export function Msg() {

    const {msg, state} = useSelector(selectMsg)
    const dispatch = useDispatch();
    const [newMsg, setNewMsg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setMsg(newMsg))
        setNewMsg("")
    }

    return (
        <>
        <h2>Here we will see the basic msg from store</h2>
            <div className="msg_wrapper">
                <button
                onClick={()=> dispatch(showMsg())}
                >
                    Show Msg
                </button>
                <>
                    {state ? <div className="msg"> {msg} </div> : null }
                </>
   
                <button
                onClick={()=>dispatch(hideMsg())}
                >
                    Hide Msg
                </button>

                <form onSubmit={handleSubmit}>
                    <input
                    type="text" 
                    placeholder="Enter your msg" 
                    value={newMsg}
                    onChange={(e)=>setNewMsg(e.target.value)}
                    />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </>
    )
}