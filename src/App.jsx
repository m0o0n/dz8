import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authThunk } from 'store/auth/actions';
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from 'react-router-dom';
import { Layout } from 'components/Common/Layout';
import Users from 'pages/Users';
import Login from 'pages/Login';
import Registate from 'pages/Registrate';
import Home from 'pages/Home';
import PrivateRoute from 'guard/PrivateRoute';
import PublicRoute from 'guard/PublicRoute';

const App = () => {
  const dispath = useDispatch()
  useEffect(() => {
    dispath(authThunk())
  }, [dispath])
  return (
    <BrowserRouter basename="/goit-react-hw-07-phonebook">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="users" element={<Users />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/registrate" element={<PublicRoute><Registate /></PublicRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
