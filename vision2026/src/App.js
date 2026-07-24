import './App.css';


import { useGlobalEffects } from './hooks/useGlobalEffects';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Token from "./Token";

// import AdminLayout from "./admin/AdminLayout";

import AuthGuard from './Authguard';
import AddEvent from './Admindash/AddEvent';



// new import
import Cursor from "./components/Cursor";
import Home from "./components/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Adash from "./pages/Adash";


function App() {
  useGlobalEffects(); 
  return (
    <BrowserRouter>
      <Token.Provider value={localStorage.getItem("token") || null}>
        <Cursor />
        <Routes>
          {/* <Route path="/admin" element={<AuthGuard role="Admin"><AdminLayout><Dashboard /></AdminLayout></AuthGuard>} /> */}
          <Route path="/admin"element={<Adash/>}/>
          <Route path="/"element={<Home/>}/>
          <Route path="/login"element={<Login/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/addevent" element={<AddEvent />} />
          
        </Routes>
      </Token.Provider>
      
     
    </BrowserRouter>
    
  );
}

export default App;