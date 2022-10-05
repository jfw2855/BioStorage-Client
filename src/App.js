import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './components/shared/RequireAuth';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import UpdatePassword from './components/UpdatePassword';
import Home from './components/Home';

const App = () => {

  const [user,setUser] = useState(null)
  return (
      <>
        <Fragment>
          <Routes>
            {/* unauthenticated routes */}
            <Route path='/sign-in' element={<SignIn setUser={setUser}/>}/>
            <Route path='/sign-up' element={<SignUp setUser={setUser}/>}/>
            <Route path='/update-password' element={<UpdatePassword/>}/>
            {/* {authenticated routes} */}
            <Route 
						path='/'
						element={
						<RequireAuth user={user}>
							<Home user={user} />
						</RequireAuth>
						} 
						/>
          </Routes>
        </Fragment>

      </>

  );
}

export default App;

