import React, { useEffect } from "react";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpense } from "../components/utils/http";
import { setExpense } from "../store/expense";
import { authenticate } from "../store/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AllExpense() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.expenses);
  const authToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    async function getData() {
      try {
        const fetchedExpenses = await fetchExpense(authToken);
        dispatch(setExpense(fetchedExpenses));
      } catch (err) {
        throw err;
      }
    }
    getData();
  }, [dispatch, setExpense, authToken]);
  return (
    <ExpensesOutput expensesPeriod="Total" expenses={selector.allExpenses} />
  );
}
