import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from 'react-router-dom';
import { Layout } from 'components/Common/Layout';
import Users from 'pages/Users';
import Login from 'pages/Login';
import Registate from 'pages/Registrate';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-07-phonebook">
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<App />} />
            <Route path="users" element={<Users />}/>
            <Route path="/login" element={<Login />}/> 
            <Route path="/registrate" element={<Registate />}/> 
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
