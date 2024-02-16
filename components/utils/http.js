import axios from "axios";

const URL = "https://expense-tracker-1d7d0-default-rtdb.firebaseio.com";
export function storeExpense(expenseData) {
  const response = axios.post(`${URL}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpense() {
  try {
    const response = await axios.get(`${URL}/expenses.json`);
    const expenses = [];
    for (const key in response.data) {
      const expObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description,
      };
      expenses.push(expObj);
    }
    return expenses;
  } catch (err) {
    console.error("Error fetching expenses:", err);
    throw err;
  }
}

export function updateExpenses(id, expenseData) {
  return axios.put(`${URL}/expenses/${id}.json`, expenseData);
}
export function deletedExpenses(id) {
  return axios.delete(`${URL}/expenses/${id}.json`);
}
