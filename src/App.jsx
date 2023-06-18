import './App.css';
import {
  Routes, Route,
} from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DummyHome from './pages/DummyHome'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dummyhome" element={<DummyHome />} />
    </Routes>
  );
}

export default App;
