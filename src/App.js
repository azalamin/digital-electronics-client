import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MangeInventories from './components/MangeInventories/MangeInventories';
import Register from './components/Register/Register';
import PrivetRoute from './PrivetRoute/PrivetRoute';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/manage"
          element={
            <PrivetRoute>
              <MangeInventories />
            </PrivetRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
