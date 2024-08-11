import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import User from './User';

function App() {
 
  return (
<div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<User/>}></Route>
      <Route path="/create" element={<CreateUser/>}></Route>
      <Route path="/update" element={<UpdateUser/>}></Route>

    </Routes>
  </BrowserRouter>
</div>
  )
}

export default App
