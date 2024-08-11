import React, { useState } from 'react'
import axios from 'axios'
const CreateUser = () => {
    const [name, setName] = useState()
    const [email, setemail] = useState()
    const [age, setage] = useState()

    const submit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{name,email,age}).then(result=>console.log(result))
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>

            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={submit}>
                    <h2>Add User</h2>
                    <div className='mb-2'>
                        <label>Name</label>
                        <input onChange={(e) => setName(e.target.value)} className='form-control' placeholder='enter Name' type='text'></input>
                    </div>
                    <div className='mb-2'>
                        <label>email</label>
                        <input onChange={(e) => setemail(e.target.value)} className='form-control' placeholder='enter email' type='email'></input>
                    </div>
                    <div className='mb-2'>
                        <label>age</label>
                        <input className='form-control' placeholder='enter number' type='number' onChange={(e) => setage(e.target.value)}></input>

                    </div>
                    <button type='submit' className='btn btn-success'> Submit</button>

                </form>
            </div>
        </div>
    )
}

export default CreateUser