import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";
import { useSelector } from "react-redux";
function ExpensesSummary({ periodName, expenses }) {
  const exp = useSelector((state) => state["Expenses"]);
  useEffect(() => {
    console.log("exp, should return array", exp["expenses"]);
    const expenseSum = exp["expenses"].reduce((sum, expense) => {
      return sum + expense.amount;
    }, 0);

    console.log("exp, post expenseSum", expenseSum);
  }, [exp !== undefined]);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      {/* <Text style={styles.sum}>$ {expenseSum?.toFixed(2)}</Text> */}
    </View>
  );
}

export default ExpensesSummary;
const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: { fontSize: 12, color: GlobalStyles.colors.primary400 },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
