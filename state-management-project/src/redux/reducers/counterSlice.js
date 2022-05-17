import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counterValue: 0,
    showReduxCounter: true,
  },
  reducers: {
    incrementCounter(state, action) {
      return {...state, counterValue: state.counterValue + action.payload};
    },
    decrementCounter(state, action) {
      return {...state, counterValue: state.counterValue - action.payload};
    },
    toggleReduxCounter(state, action) {
      return {...state, showReduxCounter: !state.showReduxCounter};
    },
  }
})

export const { incrementCounter, decrementCounter, toggleReduxCounter } = counterSlice.actions;
export default counterSlice.reducer;