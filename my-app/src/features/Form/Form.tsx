import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectForm, updateName } from "./formSlice";
export const Form = () => {
  // setup the selector
  const user = useAppSelector(selectForm);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>This is the name value from redux:{user}</p>
      <input
        type="text"
        onChange={(e) => dispatch(updateName(e.target.value))}
      />
    </div>
  );
};
