import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addten, decrement, increment } from './CounterSlice'

export default function Counter() {
    const count = useSelector(state=> state.counter.value)
    const dispath = useDispatch()
    return (
        <>
            <h1>Counter Redux</h1>
            <button onClick={()=>dispath(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=>dispath(increment())}>+</button>
            <button onClick={()=>dispath(addten(10))}>Add 10</button>
        </>
    )
}
