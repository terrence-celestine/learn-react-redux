import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectForm,
  updateFirstName,
  updateLastName,
  resetName,
} from "./formSlice";
export const Form = () => {
  // setup the selector
  const user = useAppSelector(selectForm);
  const dispatch = useAppDispatch();

  const handleResetName = () => {
    dispatch(resetName());
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>First Name is: {user?.firstName}</p>
      <p>Last Name: {user?.lastName}</p>
      <label>
        First Name:{" "}
        <input
          value={user?.firstName}
          type="text"
          onChange={(e) => dispatch(updateFirstName(e.target.value))}
        />
      </label>
      <label>
        Last Name:{" "}
        <input
          value={user?.lastName}
          type="text"
          onChange={(e) => dispatch(updateLastName(e.target.value))}
        />
      </label>
      <button onClick={() => handleResetName()}>Reset name</button>
    </div>
  );
};
