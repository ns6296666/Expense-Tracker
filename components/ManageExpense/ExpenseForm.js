import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/style";

function ExpenseForm({ id }) {
  function amountChangeHandler() {}
  return (
    <View style={styles.form}>
      <Text style={styles.heading}>{id ? "Edit" : "Add"} Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyBoardType: "decimal-pad",
            onChangeText: amountChangeHandler,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
          style={styles.rowInput}
        />
      </View>

      <Input label="Description" textInputConfig={{ multiline: true }} />
    </View>
  );
}

export default ExpenseForm;
const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: GlobalStyles.colors.primary100,
    fontSize: 24,
    fontWeight: "bold",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: { flex: 1 },
  form: { marginTop: 40 },
});
