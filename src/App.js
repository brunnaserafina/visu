import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

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
import { PostProvider } from './contexts/PostContext';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Search from './pages/Search';
import UserAccount from './pages/UserAccount';
import Travel from './pages/Travel';
import { TravelProvider } from './contexts/TravelContext';
import { FaExclamationTriangle } from 'react-icons/fa';
import styled from 'styled-components';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <ToastContainer />
      <TravelProvider>
        <PostProvider>
          <Router>
            <Routes>
              {loading ? <Route path="/" element={<Welcome />} /> : <Route path="/" element={<Login />} />}

              <Route
                path="/Home"
                element={
                  <ProtectedRouteGuard>
                    <Home />
                  </ProtectedRouteGuard>
                }
              />

              <Route
                path="/Search"
                element={
                  <ProtectedRouteGuard>
                    <Search />
                  </ProtectedRouteGuard>
                }
              />
              <Route
                path="/City"
                element={
                  <ProtectedRouteGuard>
                    <City />
                  </ProtectedRouteGuard>
                }
              />
              <Route
                path="/Date"
                element={
                  <ProtectedRouteGuard>
                    <Date />
                  </ProtectedRouteGuard>
                }
              />
              <Route
                path="/Spending"
                element={
                  <ProtectedRouteGuard>
                    <Spending />
                  </ProtectedRouteGuard>
                }
              />
              <Route
                path="/Attractions"
                element={
                  <ProtectedRouteGuard>
                    <Attractions />
                  </ProtectedRouteGuard>
                }
              />
              <Route
                path="/Restaurants"
                element={
                  <ProtectedRouteGuard>
                    <Restaurants />
                  </ProtectedRouteGuard>
                }
              />
              <Route
                path="/Accommodation"
                element={
                  <ProtectedRouteGuard>
                    <Accommodation />
                  </ProtectedRouteGuard>
                }
              />
              <Route
                path="/Pictures"
                element={
                  <ProtectedRouteGuard>
                    <Pictures />
                  </ProtectedRouteGuard>
                }
              />
              <Route
                path="/Summary"
                element={
                  <ProtectedRouteGuard>
                    <Summary />
                  </ProtectedRouteGuard>
                }
              />
              <Route
                path="/Finish"
                element={
                  <ProtectedRouteGuard>
                    <Finish />
                  </ProtectedRouteGuard>
                }
              />
              <Route
                path="/User"
                element={
                  <ProtectedRouteGuard>
                    <UserAccount />
                  </ProtectedRouteGuard>
                }
              />
              <Route
                path="/Travel/:id"
                element={
                  <ProtectedRouteGuard>
                    <Travel />
                  </ProtectedRouteGuard>
                }
              />
            </Routes>
          </Router>
        </PostProvider>
      </TravelProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const navigate = useNavigate();

  if (localStorage.getItem('visu') === null) {
    navigate('/');
    return (
      <NotPermission>
        <FaExclamationTriangle fontSize={'50px'} color={'red'} />
        <h1>Você não tem permissão para acessar essa página!</h1>
        <h1>Faça login para continuar</h1>
      </NotPermission>
    );
  } else {
    return <>{children}</>;
  }
}

const NotPermission = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    color: red;

    @media (min-width: 1000px) {
      font-size: 20px;
    }
  }
`;
