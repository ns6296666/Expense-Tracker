import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allExpenses: [],
};
const expenseSlice = createSlice({
  name: "expense",
  initialState: initialState,
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random().toString();
      console.log("in add", action.payload);
      action.payload.date = action.payload.date.toISOString();
      state.allExpenses.push({ ...action.payload, id: id });
    },

    setExpense: (state, action) => {
      for (const key in action.payload) {
        const expense = action.payload[key];
        expense.date = expense.date.toISOString();
      }
      state.allExpenses = action.payload;
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
      if (index !== -1) {
        const updatedExpenses = [...state.allExpenses];
        action.payload.date = action?.payload?.date?.toISOString();
        updatedExpenses[index] = action.payload;
        state.allExpenses = updatedExpenses;
      }
    },
  },
});
export const { addExpense, setExpense, deleteExpense, updateExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
