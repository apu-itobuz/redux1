import React from 'react' 
import DeleteAllUser from './DeleteAllUser'
import {fackUserIdData} from '../api/index.jsx'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlices.jsx'
import DisplayUsers from  '../components/DisplayUsers.jsx'


const Navbar = () => {
    const dispatch = useDispatch()
    const addNewUser =(payload)=>{
        // console.log(payload);
        dispatch(addUser(payload))

    }
    return (
        <>
            <div className='flex flex-col p-11 w-[60%] m-auto border-2 border-pink-100 gap-5'>
                <div className='flex justify-between'>
                    <h3 className=' border-yellow-400  border-b-2 p-2'>LIST OF OUR USER</h3>
                    <h3 className='border p-2 text-green-500' onClick={()=> addNewUser(fackUserIdData())} >ADD NEW USER</h3>
                </div>
                <div className='flex justify-between'>
                    <ul><DisplayUsers/></ul>
                    <div>delete</div>
                </div>
                <div className='flex justify-end'>
                    <DeleteAllUser/>

                </div>
            </div>
        </>
    )
}

export default Navbar