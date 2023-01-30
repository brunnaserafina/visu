import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Login from './pages/Login';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Router>
      <Routes>{loading ? <Route path="/" element={<Welcome />} /> : <Route path="/" element={<Login />} />}</Routes>
    </Router>
  );
}
