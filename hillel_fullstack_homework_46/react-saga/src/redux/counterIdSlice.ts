import { createSlice } from '@reduxjs/toolkit'

interface CounterIDState {
  value: number;
}

const initialState: CounterIDState = {
  value: 1,
}

const counterIdSlice = createSlice({
  name: 'counterId',
  initialState: initialState,
  reducers: {
    plusId: (state) => {
      state.value = state.value + 1;
    },
    minusId: (state) => {
      state.value = state.value - 1;
    },
    incrementAsync: () => {},
    decrementAsync: () => {},
  }
})

export const { plusId, minusId, incrementAsync, decrementAsync} = counterIdSlice.actions;
export default counterIdSlice.reducer;