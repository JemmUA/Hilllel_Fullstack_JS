import { createSlice } from '@reduxjs/toolkit'

interface CounterIDState {
  value: number;
}

const initialState: CounterIDState = {
  value: 1,
}

const counterIdSlice = createSlice({
  name: 'counterId',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    // add: (state, action: PayloadAction<number>) => {
    //   state.value = state.value + action.payload;
    // }
  // },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(
  //       incrementAsync.pending,
  //       () => {
  //         console.log('Promise pending ...');
  //       }
  //     )
  //     .addCase(
  //       incrementAsync.fulfilled,
  //       (state, action: PayloadAction<number>) => {
  //         console.log('Promise fulfilled ...');
  //         state.value = state.value + action.payload;
  //       })
  // }
// })

// export const incrementAsync = createAsyncThunk(
//   'counter/incrementAsync',
//   async (myCount: number): Promise<number> => {
//     await new Promise(resolve => setTimeout(resolve, 3000));
//     return myCount;
  }
})

export const { increment, decrement } = counterIdSlice.actions;
// export const {add } = counterIdSlice.actions;
export default counterIdSlice.reducer;