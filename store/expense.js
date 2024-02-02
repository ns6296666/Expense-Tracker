import { createSlice } from "@reduxjs/toolkit";

export const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of shoes",
    amount: 55.99,
    date: new Date("2024-1-29"),
  },
  {
    id: "e2",
    description: "a pair of trousers",
    amount: 50.99,
    date: new Date("2021-2-15"),
  },
  {
    id: "e3",
    description: "milk",
    amount: 2.99,
    date: new Date("2021-5-15"),
  },
  {
    id: "e4",
    description: "grocery",
    amount: 2.99,
    date: new Date("2021-5-20"),
  },
  {
    id: "e5",
    description: "party",
    amount: 20.99,
    date: new Date("2021-12-20"),
  },
];
const initialState = {
  allExpenses: DUMMY_EXPENSES,
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
};
const expenseSlice = createSlice({
  name: "expense",
  initialState: initialState,
  reducers: {
    addExpense: (state, action) => {
      console.log("state in addexpense", state);
      const id = new Date().toString() + Math.random().toString();
      state.allExpenses.push({ ...action.payload, id: id });
    },

    deleteExpense: (state, action) => {
      state.allExpenses = state.allExpenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
    updateExpense: (state, action) => {
      const index = state.allExpenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      console.log("===========", action.payload);
      state.allExpenses[index] = { ...action.payload };
    },
  },
});
export const { addExpense, deleteExpense, updateExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
