// create the slice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Setup the interface for the Type
export interface SelectState {
    selectedPokemon: string;
}

// Setup the initial state
const initialState: SelectState = {
    selectedPokemon: ""
}

// Setup the slice of the pie that will be used through the app
export const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        updateSelectedPokemon: (state, action: PayloadAction<string>) => {
            state.selectedPokemon = action.payload;
        }
    }
});

// export the reducers 
export const { updateSelectedPokemon } = selectSlice.actions;

// export the selector that will be used through the state value
export const dropDownSelect = (state:RootState) => state.select;

// return the reducer
export default selectSlice.reducer;
