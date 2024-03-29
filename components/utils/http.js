import axios from "axios";

const URL = "https://expense-tracker-1d7d0-default-rtdb.firebaseio.com";
export function storeExpense(expenseData) {
  const response = axios.post(`${URL}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpense(token) {
  try {
    const response = await axios.get(`${URL}/expenses.json?auth=${token}`);
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

export async function updateExpenses(id, expenseData) {
  try {
    const response = await axios.put(`${URL}/expenses/${id}.json`, expenseData);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
export function deletedExpenses(id) {
  return axios.delete(`${URL}/expenses/${id}.json`);
}
