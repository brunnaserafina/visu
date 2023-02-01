import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import City from './pages/newPost/City';
import Date from './pages/newPost/Date';
import Spending from './pages/newPost/Spending';
import Attractions from './pages/newPost/Attractions';
import Restaurants from './pages/newPost/Restaurants';
import Accommodation from './pages/newPost/Accommodation';
import Pictures from './pages/newPost/Pictures';
import Summary from './pages/newPost/Summary';
import Finish from './pages/newPost/Finish';

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
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/Accommodation" element={<Accommodation />} />
        <Route path="/Pictures" element={<Pictures />} />
        <Route path="/Summary" element={<Summary />} />
        <Route path="/Finish" element={<Finish />} />
      </Routes>
    </Router>
  );
}
