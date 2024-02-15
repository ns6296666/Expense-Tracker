import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expense-tracker-1d7d0-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
