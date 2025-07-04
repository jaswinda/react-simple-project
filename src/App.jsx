import "./App.css";
import { useState } from "react";

const CustomComponent = ({ title }) => {
  const[count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  return (
    <div className='card' onClick={() => setCount(count + 1)}>
      <h1>{title}</h1>
      <h1>{count}</h1>
      <button onClick={() => setLiked(!liked)}>
        {liked ? '❤️' : '🤍'}
      </button>
    </div>
  );
};
const App = () => {
 
  return (
    <>
      <h1>Hello World</h1>
      <CustomComponent title="POST 1" />
      <CustomComponent title="POST 2" />
    </>
  );
};

export default App;
