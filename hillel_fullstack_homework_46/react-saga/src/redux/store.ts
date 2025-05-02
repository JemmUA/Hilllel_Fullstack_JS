import {configureStore} from "@reduxjs/toolkit";
import checkBoxReducer from './checkBoxSlice.ts';


console.log("Store. checkBoxReducer:", checkBoxReducer);
export const store = configureStore({
    reducer: {
        checkBox: checkBoxReducer
    }
});

export type RootState = ReturnType<typeof store.getState>; // тип для state
export type AppDispatch = typeof store.dispatch; // тип для dispatch