import "./App.css";

import { useAuthContext } from "./context/useAuthContext";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const App = () => {
 const {isAuthenticated} = useAuthContext();

  return (
    <div>
      {isAuthenticated ? <HomePage /> : <LoginPage />}
    </div>
  );
};

export default App;
