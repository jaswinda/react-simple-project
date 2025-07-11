import "./App.css";
import { useState } from "react";
import CustomButton from "./components/CustomButton";
import CustomField from "./components/CustomField";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    setLoading(true);
    const trimUsername = username.trim();
    const trimPassword = password.trim();
    if(trimUsername === '' || trimPassword === ''){
      setError('Please enter a username and password');
      return;
    }
    if(trimUsername === 'admin' && trimPassword === '123456'){
      setError('Login successful');
    }else{
      setError('Invalid username or password');
    }
    setTimeout(() => {
      setError('');
    }, 2000);
   
  
   
    setLoading(false);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>

      <CustomField placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <CustomField placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <h1>{error}</h1>}
      {loading? <h1> Loading... </h1>:
      <CustomButton name="Login" onPress={() => handleLogin()} />}

    </div>
  );
};

export default App;
