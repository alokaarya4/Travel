import { Toaster } from "react-hot-toast";
import login from "./Componants/Login";
import signup from "./Componants/Signup";
import home from "./Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Componants/Navbar";
import Home from "./Home";
import Login from "./Componants/Login";
import Signup from "./Componants/Signup";
import { UserProvider } from "./UserContext";
import ContactUs from "./Componants/ContactUs";
import UserAuth from "./UserAuth";
import ViewPlace from "./Componants/ViewPlace";
import './App.css';
import AddPlace from "./Componants/AddPlace";
import Footer from "./Componants/Footer";
import ManageUser from "./Componants/ManageUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='contact' element={ <ContactUs /> } />
            <Route path='viewplace/:location' element={<ViewPlace /> } />
            <Route path='addplace' element={ <AddPlace /> } />
            <Route path='manageuser' element={ <ManageUser /> } />
          </Routes>
          <Footer></Footer>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;