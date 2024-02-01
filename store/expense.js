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
  expenses: DUMMY_EXPENSES,
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
};
const expenseSlice = createSlice({
  name: "expense",
  initialState: initialState,
  reducers: {
    addExpense: (state, action) => {
      console.log("state in addexpense", state);
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    },

    deleteExpense: (state, action) => {
      console.log("in redux delete", action, "state", state.expenses);
      const filteredExpense = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
      return filteredExpense;
    },
    updateExpense: () => {
      const index = state.expenses.findIndex(
        (expense) => expense.id !== action.payload
      );
      const newArray = [...state.expenses];

      newArray[index].completed = true;
      return newArray;
    },
  },
});
export const { addExpense, deleteExpense, updateExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
