import "./App.css";
import CounterPage from "./pages/CounterPage";
import LoginPage from "./pages/loginPage";
import useCountContext from "./context/useCountContext";

const App = () => {
  const {count} = useCountContext();

  return (
    <div className="login-container">
      <div style={
        {
          position: "absolute",
          height: "100px",
          top: 0,
          backgroundColor: "red",
          display: "flex",
          justifyContent: "right",
          width: "100%",
          alignItems: "center",
        }
      }>
        <h1>Cart ({count})</h1>

      
      </div>
      <CounterPage/>
    </div>
  );
};

export default App;
