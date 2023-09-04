import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions";

const Counter = () => {
  let counter = useSelector((state) => state.count);
  let dispatch = useDispatch();
  const handleInc = () => {
    dispatch(increment());
  };
  const handleDec = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
};
export default Counter;
