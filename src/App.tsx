import React from 'react';
import './App.css';
import logo from './logo.svg';
import * as _ from 'lodash';
import { ApolloClientComponent } from './components';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './modules/auth/components/Login';

function App() {
  console.log('LoginPage', LoginPage);
  return (
    // // <ApolloClientComponent>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<div>Home</div>}></Route>
    //       <Route path='/login' element={<div>Home2</div>}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // // </ApolloClientComponent>
    <>
    <Link to='/haha'>Header</Link>
      <Routes>
        <Route path='/haha' element={<div>teams</div>} />
      </Routes>
      </>
  );
}

export default App;
