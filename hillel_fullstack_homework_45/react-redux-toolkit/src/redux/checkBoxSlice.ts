import {createSlice} from "@reduxjs/toolkit";

interface CheckBoxState {
    value: boolean;
}

const initialState: CheckBoxState = {
    value: false
}

const checkBoxSlice = createSlice({
    name: 'checkBox', // ім'я слайсу
    initialState: initialState,
    reducers: {
        invertValue: (state) => {
            state.value = !state.value;
            console.log("state.value(reducer):", state.value);
        }
    }
}); // частина стану, екшини і редьюсери цього стану

export const {invertValue} = checkBoxSlice.actions;
export default checkBoxSlice.reducer;