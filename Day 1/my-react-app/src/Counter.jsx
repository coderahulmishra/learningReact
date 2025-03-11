import { useState } from "react"

function Counter(){
    const [count,setCount] = useState(0)
    return (
        <>
        <h1>count: {count}</h1>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increment</button>

        <button onClick={() => {
            if(count > 0){
                setCount(count - 1)
            }
        }}>Decrement</button>
        </>
    )
}

export default Counter;