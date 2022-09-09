import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount( count => count += 1 )
    }
    const decrement = () => {
        setCount( count => count -= 1 )
    }

    const reset = () => {
        setCount()
    }

  return (
    <>
        <div>
            <h1>{count}</h1>
        </div>
        <div>
            <button style={btn} onClick={increment}>+</button>
            <button style={btn} onClick={decrement}>-</button>
            <button style={btn} onClick={reset}>Reset</button>
        </div>
    </>
  )
}

const btn = {
    width: '50px',
    borderRadius: '5px',
    padding: '8px 12 px',
    backgroundColor: 'blue',
    color: 'white',
    margin: '1px 4px'
}

export default Counter