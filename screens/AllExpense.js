import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";

export default function AllExpense({ navigation }) {
  const PressHandler = () => {
    console.log("clicked");
    navigation.navigate("ManageExpense");
  };
  return <ExpensesOutput expensesPeriod="Total" />;
}
