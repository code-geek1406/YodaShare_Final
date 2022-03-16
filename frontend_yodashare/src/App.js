import React, { useEffect } from 'react';
import { Switch, Route, useNavigate } from 'react-router-dom';

import { Login } from './components';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);

  return (
    <Switch>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Switch>
  );
};

export default App;