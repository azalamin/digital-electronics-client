import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddInventory from "./components/AddInventory/AddInventory";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import Login from "./components/Login/Login";
import MangeInventories from "./components/MangeInventories/MangeInventories";
import MyItem from "./components/MyItem/MyItem";
import Register from "./components/Register/Register";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

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
        ></Route>
        <Route
          path="/manage/:manageId"
          element={
            <PrivetRoute>
              <InventoryDetails />
            </PrivetRoute>
          }
        ></Route>
        <Route
          path="/addInventory"
          element={
            <PrivetRoute>
              <AddInventory />
            </PrivetRoute>
          }
        />
        <Route
          path="/myItem"
          element={
            <PrivetRoute>
              <MyItem />
            </PrivetRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
