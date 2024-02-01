import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../store/expense";

export const store = configureStore({
  reducer: { expenses: expenseReducer },
});
