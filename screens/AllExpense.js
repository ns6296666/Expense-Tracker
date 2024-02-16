import React, { useEffect } from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpense } from "../components/utils/http";
import { setExpense } from "../store/expense";

export default function AllExpense() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.expenses);
  useEffect(() => {
    async function getData() {
      try {
        const fetchedExpenses = await fetchExpense();
        dispatch(setExpense(fetchedExpenses));
      } catch (err) {
        throw err;
      }
    }
    getData();
  }, [dispatch, setExpense]);
  return (
    <ExpensesOutput expensesPeriod="Total" expenses={selector.allExpenses} />
  );
}
