import "./App.css";
import LoginPage from "./pages/loginPage";
import { useAuthContext } from "./context/useAuthContext";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
 const {isAuthenticated} = useAuthContext();

  return (
    <div>
      {isAuthenticated ? <HomePage /> : <LoginPage />}
    </div>
  );
};

export default App;
