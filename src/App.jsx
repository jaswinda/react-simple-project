import "./App.css";
import { useState, useEffect } from "react";
import CustomButton from "./components/CustomButton";

const App = () => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    console.log('render');
  },[count]);

  return (
    <>
      <h1>Hello World</h1>
      <h1>{count}</h1>
      <CustomButton name="Click me 1" onPress={() => setCount(count + 1)} />
      <CustomButton name={liked ? 'liked' : 'not liked'} onPress={() => setLiked(!liked)} />
      <h1>{liked ? 'liked' : 'not liked'}</h1>
    </>
  );
};

export default App;
