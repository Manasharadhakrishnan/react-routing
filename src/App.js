

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import SignUp from './SignUp';
import Homepage from './Homepage';
import Login from './Login';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='signin' element={<Login />}></Route>
          <Route path='SignUp' element={<SignUp />}></Route>
          <Route path='Homepage' element={<Homepage/>}></Route>
          <Route path='Login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
