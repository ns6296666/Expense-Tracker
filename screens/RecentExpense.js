import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";

function RecentExpense() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}

export default RecentExpense;
