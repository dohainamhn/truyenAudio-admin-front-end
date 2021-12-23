import React from 'react';
import './App.css';
import * as _ from 'lodash';
import { ApolloClientComponent } from './components';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/Login';
import { AuthorizationComponent } from './components/Authorization';
import HomePage from './pages';
import { AdminBase } from './components/AdminBase';

function App() {
  return (
    <ApolloClientComponent>
      <Routes>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
      <AdminBase>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </AdminBase>
    </ApolloClientComponent>
  );
}

export default App;
