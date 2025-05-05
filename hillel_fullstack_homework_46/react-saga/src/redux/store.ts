import {configureStore} from "@reduxjs/toolkit";
import checkBoxReducer from './checkBoxSlice.ts';
import counterIdReducer from './counterIdSlice.ts';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./counterId_Saga.ts";

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

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>; // тип для state
export type AppDispatch = typeof store.dispatch; // тип для dispatch