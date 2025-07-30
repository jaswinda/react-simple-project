import "./App.css";

import { useAuthContext } from "./context/useAuthContext";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage.jsx";

const App = () => {
 const {isAuthenticated} = useAuthContext();

  return (
    <div>
      <Routes>
        <Route path="/" element={isAuthenticated ? <HomePage /> : <LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
