import React from 'react'
import CustomButton from '../components/CustomButton';
import useCountContext from '../context/useCountContext';
import { useAuthContext } from '../context/useAuthContext';

export default function CounterPage() {
    const {count, setCount} = useCountContext();
    const {logout} = useAuthContext();

    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
  return (
    <div>
          <p>{count}</p>
        <CustomButton onPress={handleIncrement} name="Increment" />
        <CustomButton onPress={handleDecrement} name="Decrement" />
        <CustomButton onPress={logout} name="Logout" />
      
    </div>
  )
}
