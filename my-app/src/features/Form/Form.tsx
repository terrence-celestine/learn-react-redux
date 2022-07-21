import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectForm, updateFirstName, resetName } from "./formSlice";
export const Form = () => {
  // setup the selector
  const user = useAppSelector(selectForm);
  const dispatch = useAppDispatch();

  const handleSetName = (name: string): void => {
    dispatch(updateFirstName(name));
  };

  const handleResetName = () => {
    dispatch(resetName());
  };
  return (
    <div>
      <label>
        First Name:{" "}
        <input
          value={user?.firstName}
          type="text"
          onChange={(e) => handleSetName(e.target.value)}
        />
      </label>
      <label>
        First Name:{" "}
        <input
          value={user?.firstName}
          type="text"
          onChange={(e) => handleSetName(e.target.value)}
        />
      </label>
      <button onClick={() => handleResetName()}>Reset name</button>
    </div>
  );
};
