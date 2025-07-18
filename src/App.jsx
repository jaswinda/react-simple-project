import "./App.css";
import CounterPage from "./pages/CounterPage";
import LoginPage from "./pages/loginPage";
import { useAuthContext } from "./context/useAuthContext";
import CountContextProvider from './context/CountContext.jsx'

const App = () => {
 const {isAuthenticated} = useAuthContext();

  return (
    <div>
      {isAuthenticated ? <CountContextProvider> <CounterPage /></CountContextProvider> : <LoginPage />}
    </div>
  );
};

export default App;
