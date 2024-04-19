import React from 'react'
import { useSelector } from 'react-redux'

const DisplayUsers = () => {

    const data = useSelector(state => state.users)
    console.log(data);

  return (
    <div className='flex flex-col p-[0.05rem] w-[20] m-auto border-2 border-pink-100 gap-5'>
                
                <div className='flex justify-between'>
                
                    <h1>apu</h1>
                  
                </div>
               
            </div>
  )
}

export default DisplayUsers