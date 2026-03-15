import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AgeState {
    isAgeConfirmed: boolean;
}

const initialState: AgeState = {
    isAgeConfirmed: false,
};

const ageSlice = createSlice({
    name: 'age',
    initialState,
    reducers: {
        confirmAge: (state) => {
            state.isAgeConfirmed = true;
        },
        resetAge: (state) => {
            state.isAgeConfirmed = false;
        },
        setAgeConfirmed: (state, action: PayloadAction<boolean>) => {
            state.isAgeConfirmed = action.payload;
        },
    },
});

export const { confirmAge, resetAge, setAgeConfirmed } = ageSlice.actions;
export default ageSlice.reducer;