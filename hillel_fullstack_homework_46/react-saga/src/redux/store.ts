import {configureStore} from "@reduxjs/toolkit";
import checkBoxReducer from './checkBoxSlice.ts';
import counterIdReducer from './counteIdSlice.ts';
import createSagaMiddleware from 'redux-saga';

// console.log("Store. checkBoxReducer:", checkBoxReducer);
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        checkBox: checkBoxReducer,
        counterId: counterIdReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(sagaMiddleware);
    }
});

// sagaMiddleware.run();

export type RootState = ReturnType<typeof store.getState>; // тип для state
export type AppDispatch = typeof store.dispatch; // тип для dispatch