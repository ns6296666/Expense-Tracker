import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "../components/expensesOutput/utils/Date";
import { GlobalStyles } from "../constants/style";

function RecentExpense() {
  const selector = useSelector((state) => state.expenses.allExpenses);
  const date = new Date();
  const recentExpense = selector.filter(
    (data) => data.date > getDateMinusDays(date, 7)
  );
  return recentExpense.length > 0 ? (
    <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExpense} />
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>No expense in last 7 days!</Text>
    </View>
  );
}

export default RecentExpense;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
