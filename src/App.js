import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import auth from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from "./utils/authentication-Context";
import Profile from "./pages/profile";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import Login from "./pages/Login";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthProvider value={{ currentUser }}>
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
