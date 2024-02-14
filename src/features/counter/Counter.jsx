import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,reset,add_by_amount } from './counterSlice'
import "./counterSlice.scss"

const Counter = () => {
     const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()

    const [added_value, set_added_value]= useState("0")
    
    const the_num_added = Number(added_value) || 0
    const input_handler = (e)=>{
      set_added_value(e.target.value)
    }

  return (
    
    <div className='container'>
        <p className='output'>
         Using Redux basics
        </p>
        <p className='output'>
           { count}
        </p>
        <div className='button_box'>
          <div className='btn'
          onClick={()=>dispatch(decrement())}
          >
            -
          </div>
          <div className='btn2'
           onClick={()=>dispatch(increment())}
          >
            +
          </div>

        </div>
      <div className='input_container'>
      <input type="text" 
      className='input_value'
      value={added_value}
      onChange={input_handler}
       />
      </div>
        <div className='button_box'>
          <div className='btn'
          onClick={()=>{
            dispatch(add_by_amount(the_num_added))
          }}
          >
            add amount
          </div>
          <div className='btn2'
           onClick={()=>{
            set_added_value("")
            dispatch(reset())
           }}
          >
            reset count and input
          </div>

        </div>
    </div>
  )
}

export default Counter