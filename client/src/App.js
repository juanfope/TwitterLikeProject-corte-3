import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'boxicons';
import NavigationMenu from './NavigationMenu';
import DailyMeme from './components/DailyMeme';
import Feed from './components/Feed';
import LoginRegister from './components/LoginRegister';
import Post from './components/Posts';
import MyPosts from './components/MyPosts';
import OnlyRegister from './components/OnlyRegister';
import Identificacion from './components/Identificacion';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
  render() {
    return (
      <>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path='/' element={<NavigationMenu />} />

              <Route
                path="/dailymeme"
                element={
                  <ProtectedRoute>
                    <DailyMeme />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/feed"
                element={
                  <ProtectedRoute>
                    <Feed />
                  </ProtectedRoute>
                }
              />

              <Route path='/loginregister' element={<LoginRegister />} />

              <Route
                path="/post"
                element={
                  <ProtectedRoute>
                    <Post />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/myposts"
                element={
                  <ProtectedRoute>
                    <MyPosts />
                  </ProtectedRoute>
                }
              />

              <Route path='/onlyregister' element={<OnlyRegister />} />

              {/* Ruta para la página de identificación */}
              <Route
                path="/identificacion"
                element={
                  <ProtectedRoute>
                    <Identificacion />
                  </ProtectedRoute>
                }
              />

            </Routes>
          </Router>
        </AuthProvider>
      </>
    );
  }
}

export default App;
