import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sendContactForm, ContactFormPayload } from '../../services/contactService';

interface ContactState {
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: ContactState = {
    loading: false,
    success: false,
    error: null,
};

export const submitContactForm = createAsyncThunk<
    void,
    ContactFormPayload,
    { rejectValue: string }
    >('contact/submitContactForm', async (payload, thunkAPI) => {
    try {
        await sendContactForm(payload);
    } catch (error) {
        const message =
            error instanceof Error ? error.message : 'Failed to send message';

        return thunkAPI.rejectWithValue(message);
    }
});

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        resetContactState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitContactForm.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(submitContactForm.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(submitContactForm.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload || 'Failed to send message';
            });
    },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;