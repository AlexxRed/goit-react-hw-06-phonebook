import { useSelector, useDispatch } from "react-redux";
import { increment } from "redux/store";

export const App = () => {
  const dispatch = useDispatch();
  const numberOfClick = useSelector(state => state.clicks.value);


  return (
    <>
      <button onClick={() => dispatch(increment(5))}>
        {numberOfClick}
      </button>
    </>
  );
};
