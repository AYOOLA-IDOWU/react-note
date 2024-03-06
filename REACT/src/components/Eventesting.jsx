import React, { useState } from 'react'

const Eventesting = () => {
  const [myNumber, setmyNumber] = useState(1)

  const increase=()=>{
    setmyNumber(myNumber+1)
    console.log(myNumber);
  }
  return ( 
    <div>
      <h1>{myNumber}</h1>
      <button onClick={increase} className='bg-danger'>+</button>
    </div>
  )
}

export default Eventesting