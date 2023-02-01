import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import City from './pages/newPost/City';
import Date from './pages/newPost/Date';
import Spending from './pages/newPost/Spending';
import Attractions from './pages/newPost/Attractions';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Router>
      <Routes>
        {loading ? <Route path="/" element={<Welcome />} /> : <Route path="/" element={<Login />} />}
        <Route path="/City" element={<City />} />
        <Route path="/Date" element={<Date />} />
        <Route path="/Spending" element={<Spending />} />
        <Route path="/Attractions" element={<Attractions />} />
      </Routes>
    </Router>
  );
}
