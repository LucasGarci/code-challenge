import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import Button from 'react-bootstrap/Button';

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <Button
                aria-label="Decrement value"
                onClick={() => count > 1 ? dispatch(decrement()) : null}
            >
                -
            </Button>
            <span>{count}</span>

            <Button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                +
            </Button>
        </>
    )
}

export default Counter

