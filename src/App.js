import React, { useState, Fragment, switddfsdf } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import UpdatePassword from './components/UpdatePassword';

const App = () => {

  const [user,setUser] = useState(null)
  return (
      <>
        <Fragment>
          <Routes>
            <Route path='/'/>
            <Route path='/sign-in' element={<SignIn setUser={setUser}/>}/>
            <Route path='/sign-up' element={<SignUp setUser={setUser}/>}/>
            <Route path='/update-password' element={<UpdatePassword/>}/>
          </Routes>
        </Fragment>

      </>

  );
}

export default App;

