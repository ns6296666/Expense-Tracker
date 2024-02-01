import React from "react";
import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of shoes",
    amount: 55.99,
    date: new Date("2022-5-1"),
  },
  {
    id: "e2",
    description: "a pair of trousers",
    amount: 50.99,
    date: new Date("2021-2-15"),
  },
  {
    id: "e3",
    description: "milk",
    amount: 2.99,
    date: new Date("2021-5-15"),
  },
  {
    id: "e4",
    description: "grocery",
    amount: 2.99,
    date: new Date("2021-5-20"),
  },
  {
    id: "e5",
    description: "party",
    amount: 20.99,
    date: new Date("2021-12-20"),
  },
];
function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
