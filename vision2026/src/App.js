import './App.css';
import Cursor from "./user/components/Cursor";
import Login from "./user/components/Login"; 
import Register from "./user/components/Register";
import { useGlobalEffects } from './hooks/useGlobalEffects';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Token from "./Token";
import UserLayout from "./user/UserLayout";
import Home from "./user/pages/Home";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import AuthGuard from './Authguard';

function App() {
  useGlobalEffects(); 
  return (
    <BrowserRouter>
      <Token.Provider value={localStorage.getItem("token") || null}>
        <Cursor />
        <Routes>
          <Route path="/admin" element={<AuthGuard role="Admin"><AdminLayout><Dashboard /></AdminLayout></AuthGuard>} />
          <Route path="/" element={<UserLayout><Home /></UserLayout>} />
          <Route path="/login" element={<UserLayout><Login /></UserLayout>} />
          <Route path="/register" element={<UserLayout><Register /></UserLayout>} />
        </Routes>
      </Token.Provider>
    </BrowserRouter>
  );
}

export default App;