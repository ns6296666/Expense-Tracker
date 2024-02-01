import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "../components/expensesOutput/utils/Date";

function RecentExpense() {
  const selector = useSelector((state) => state.expenses.allExpenses);
  const date = new Date();
  const recentExpense = selector.filter(
    (data) => data.date > getDateMinusDays(date, 7)
  );
  return (
    <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExpense} />
  );
}

export default RecentExpense;
