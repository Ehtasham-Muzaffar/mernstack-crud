import React, { useState } from 'react'
import {Link} from 'react-router-dom';''
const User = () => {
    const [users, setusers] = useState([{
        name: "shamicodes", email: 'shamicodes@gmail.com', age: 27
    }])
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>

            <div className='w-70 bg-white rounded p-3'>
            <Link to="/create" className="btn btn-success">Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user) => {
                                    return(
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                    <Link to="/update" className="btn btn-success">update</Link>
                                    
                                    <button className='btn btn-danger'>delete</button></td>
                                </tr>
                            )})

                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default User