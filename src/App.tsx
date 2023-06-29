
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { UserManagement } from './components/UserManagement'
import { Test } from './components/Test';
import { Form } from './components/Form';
import { FormAdd } from './components/FormAdd';
import { InitialUrl } from './components/InitialUrl';



function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      {/* <UserManagement/> */}
      {/* <Test /> */}
      {/* <Form />  */}
      {/* <FormAdd /> */}
      <InitialUrl />
    </div>
  );
}

export default App;
