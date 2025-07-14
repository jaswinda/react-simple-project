// import
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomField from "../components/CustomField";
import { LOGIN_API } from "../util/apis";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    const trimUsername = username.trim();
    const trimPassword = password.trim();

    if (trimUsername === "" || trimPassword === "") {
      setError("Please enter both username and password");
      setLoading(false);
      return;
    }
    const body = JSON.stringify({
      username: trimUsername,
      password: trimPassword,
    });
    try {
      const response = await fetch(LOGIN_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      if(response.ok){
        const data=await response.json();
        console.log("Login successful", data);
        setSuccess("Successfully logged in");
      }else{
        const errorText=await response.text();
       console.log("Login error", errorText);
       setError(errorText);
      }
    } catch (error) {
      console.error("Login error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Please sign in to your account</p>
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <CustomField
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <CustomField
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <CustomButton
            name={loading ? "Signing In..." : "Sign In"}
            onPress={handleLogin}
            disabled={loading}
          />
        </form>

        <div className="login-footer">
          <div className="demo-credentials">
            <div>
              <strong>johnd</strong> / <strong>m38rmF$</strong>
            </div>
            <div>
              <strong>mor_2314</strong> / <strong>83r5^_</strong>
            </div>
            <div>
              <strong>kevinryan</strong> / <strong>kev02937@</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
