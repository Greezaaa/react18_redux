import { createSlice } from '@reduxjs/toolkit';
const workersData = [
 {
   name: 'John',
   age: 23,
   salary: 50000,
   aptitudes: ['JavaScript', 'React'],
 },
 {
   name: 'Jane',
   age: 24,
   salary: 60000,
   aptitudes: ['JavaScript', 'React', 'Redux'],
 },
];
export const workersSlice = createSlice({
 name: 'workers',
 initialState: workersData,
 reducers: {
   addWorker: (state, action) => {
     state.push(action.payload);
   },
   removeWorker: (state, action) => {
     return state.filter((worker) => worker.name !== action.payload);
   },
 },
});
export const { addWorker, removeWorker } = workersSlice.actions;
export const selectWorkers = (state) => state.workers;