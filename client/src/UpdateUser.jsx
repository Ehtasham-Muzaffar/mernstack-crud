import React from 'react'

const UpdateUser = () => {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>

    <div className='w-50 bg-white rounded p-3'>
         <form>
            <h2>Update User</h2>
            <div className='mb-2'>
                <label>Name</label>
                <input className='form-control' placeholder='enter Name' type='text'></input>
            </div>
            <div className='mb-2'>
                <label>email</label>
                <input className='form-control' placeholder='enter email' type='email'></input>
            </div>
            <div className='mb-2'>
                <label>age</label>
                <input className='form-control' placeholder='enter number' type='number'></input>
    
            </div>
            <button type='submit' className='btn btn-success'> Update </button>

         </form>
    </div>
</div>
  )
}

export default UpdateUser