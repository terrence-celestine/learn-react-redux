import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Setup the interface for the Type
export interface FormState {
    firstName: string;
    lastName: string;
}

// Setup the initial state
const initialState: FormState = {
    firstName: "",
    lastName: ""
}

// Setup the slice of pie that will be used through the app
export const formSlice = createSlice({
    name: 'form',
    initialState, 
    reducers: {
        updateFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        resetName: (state) => {
            state.firstName = "";
            state.lastName = "";
        }
    }
});

// export the slice actions
export const { updateFirstName, resetName} = formSlice.actions;

// export the selector, this will be used in other files as the state value
export const selectForm = (state:RootState) => state.form;

// return the reducer
export default formSlice.reducer;