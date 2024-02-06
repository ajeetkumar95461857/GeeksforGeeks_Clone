import React, { useState } from 'react'

const UseState = () => {

    const [num, setnum] = useState(0);
    return (
        <button onClick={() => {
            setnum(num + 1);
        }}>click me {num}</button>
    )
}

export default UseState