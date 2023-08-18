import { Toaster } from "react-hot-toast";
import login from "./Componants/Login";
import signup from "./Componants/Signup";
import home from "./Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Componants/Navbar";
import AddLocation from "./Componants/AddLocation";
import Home from "./Home";
import Login from "./Componants/Login";
import Signup from "./Componants/Signup";
import { UserProvider } from "./UserContext";
import ContactUs from "./Componants/ContactUs";
import UserAuth from "./UserAuth";
import ViewLocation from "./Componants/ViewLocation";
import ViewPlace from "./Componants/ViewPlace";
import './App.css';
import AddPlace from "./Componants/AddPlace";

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
            <Route path='location' element={<AddLocation />} />
            <Route path='contact' element={ <ContactUs /> } />
            <Route path='viewlocation' element={ <ViewLocation /> } />
            <Route path='viewplace' element={ <ViewPlace /> } />
            <Route path='addplace' element={ <AddPlace /> } />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;