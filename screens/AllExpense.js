import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";

export default function AllExpense({ navigation }) {
  const selector = useSelector((state) => state.expenses);
  const PressHandler = () => {
    navigation.navigate("ManageExpense");
  };
  return (
    <ExpensesOutput expensesPeriod="Total" expenses={selector.allExpenses} />
  );
}
