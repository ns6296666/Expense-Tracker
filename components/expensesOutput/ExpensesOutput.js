import React from "react";
import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of shoes",
    amount: 55.99,
    date: new Date("5-1-2022"),
  },
  {
    id: "e2",
    description: "a pair of trousers",
    amount: 50.99,
    date: new Date("15-2-2021"),
  },
  {
    id: "e3",
    description: "milk",
    amount: 2.99,
    date: new Date("15-5-2021"),
  },
  {
    id: "e4",
    description: "grocery",
    amount: 2.99,
    date: new Date("20-5-2021"),
  },
  {
    id: "e5",
    description: "party",
    amount: 20.99,
    date: new Date("20-12-2021"),
  },
];
function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
