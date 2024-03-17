import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0)

    function increaseHandler() {
        setCount(count + 1)
    }

    function decreaseHandler() {
        setCount(count - 1)
    }

    function resetHandler() {
        setCount(0)
    }

    return (
        <div className='main'>
            <h2>Increment & Decrement</h2>

            <div id='box'>
                <button id='increase' onClick={decreaseHandler}>-</button>
                <div id='count'>{count}</div>
                <button id='decrease' onClick={increaseHandler}>+</button>
            </div>

            <button id='reset' onClick={resetHandler}>Reset</button>

        </div>

    )
}

export default Counter