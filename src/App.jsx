import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authThunk } from 'store/auth/actions';
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from 'react-router-dom';
import { Layout } from 'components/Common/Layout';
import Users from 'pages/Users';
import Home from 'pages/Home';
import PrivateRoute from 'guard/PrivateRoute';
import PublicRoute from 'guard/PublicRoute';
import Auth from 'pages/Auth';

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
          <Route path="/login" element={<PublicRoute><Auth /></PublicRoute>} />
          <Route path="/registrate" element={<PublicRoute><Auth /></PublicRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
