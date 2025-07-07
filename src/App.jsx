import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    console.log("render");
  },[ liked]);

  return (
    <>
      <h1>Hello World</h1>
      <h1>{count}</h1>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "40px 60px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <h1>{liked ? "liked" : "not liked"}</h1>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "40px 60px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }} onClick={() => setLiked(liked?false:true)}>{liked ? "❤️" : "🤍"}</button>
    </>
  );
};

export default App;
