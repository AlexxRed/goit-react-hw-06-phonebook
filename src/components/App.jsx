import { useSelector, useDispatch } from "react-redux";
import { increment, reset, getClicks } from "redux/clickSlice";


export const App = () => {
  const dispatch = useDispatch();
  const numberOfClick = useSelector(getClicks);


  return (
    <>
      <button onClick={() => dispatch(increment(5))}>
        {numberOfClick}
      </button>
      <button onClick={()=> dispatch(reset())}>reset</button>
    </>
  );
};
