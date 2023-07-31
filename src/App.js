import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/context';
import routes from './Config/routes.js';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
