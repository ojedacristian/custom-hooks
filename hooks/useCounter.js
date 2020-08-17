import { useState } from "react";

export const useCounter = (initial = 10)=>{
    const [counter, setCounter] = useState(initial);

    const increment = ()=>{
        setCounter(counter + 1)
    }
    
    const decrement = ()=>{
        setCounter(counter - 1)
    }
    const reset = ()=>{
        setCounter(initial)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}