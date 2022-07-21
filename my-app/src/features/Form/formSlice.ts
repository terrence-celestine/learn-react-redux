import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Setup the interface for the Type
export interface FormState {
    name: string;
}

// Setup the initial state
const initialState: FormState = {
    name: ""
}

// Setup the slice of pie that will be used through the app
export const formSlice = createSlice({
    name: 'form',
    initialState, 
    reducers: {
        updateName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        resetName: (state) => {
            state.name = "";
        }
    }
});

// export the slice actions
export const { updateName, resetName} = formSlice.actions;

// export the selector, this will be used in other files as the state value
export const selectForm = (state:RootState) => state.form.name;

// return the reducer
export default formSlice.reducer;