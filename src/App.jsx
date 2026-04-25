import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Features from './Features';
import Profiles from './Profiles';
import Communities from './Communities';
import Connect from './Connect';
import Login from './Login';
import SignUp from './SignUp';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="communities" element={<Communities />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="profiles" element={<Profiles />} />
            <Route path="connect" element={<Connect />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
