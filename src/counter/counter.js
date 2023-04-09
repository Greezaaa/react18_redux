import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./createSlice";


export function Counter() {

    const count = useSelector(selectCount)
    const dispatch = useDispatch();

    return (
        <>
            <div className="counter_wrapper">
                <button
                onClick={()=> dispatch(increment())}
                >
                    add 1
                </button>
                <div className="counter">
                    {count}
                </div>
                <button
                onClick={()=>dispatch(decrement())}
                >
                    reduce 1
                </button>
            </div>
        </>
    )
}
