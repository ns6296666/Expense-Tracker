import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/style";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { dateFormate } from "../utils/Date";

function ExpenseForm({ id, onCancel, onConfirm }) {
  const expense = useSelector((state) => state.expenses.allExpenses);

  const selectedExpense = expense.find((exp) => exp.id === id);

  const [values, setValues] = useState({
    amount: {
      value: selectedExpense ? selectedExpense.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: selectedExpense ? dateFormate(selectedExpense.date) : "",
      isValid: true,
    },
    description: {
      value: selectedExpense ? selectedExpense.description : "",
      isValid: true,
    },
  });

  function amountChangeHandler(name, e) {
    setValues((prevValues) => {
      return { ...prevValues, [name]: { value: e, isValid: true } };
    });
  }

  const submitHandler = () => {
    const expenseData = {
      id: id && id,
      amount: parseInt(values.amount.value),
      date: new Date(values.date.value),
      description: values.description.value,
    };
    const validAmount = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const validDate = expenseData.date.toString() !== "Invalid Date";
    const validDescription = expenseData.description.trim().length > 0;
    if (!validAmount || !validDate || !validDescription) {
      setValues((curValue) => {
        return {
          amount: {
            value: parseInt(curValue.amount.value),
            isValid: validAmount,
          },
          date: { value: curValue.date.value, isValid: validDate },
          description: {
            value: curValue.description.value,
            isValid: validDescription,
          },
        };
      });
      // Alert.alert("Invalid Input", "Please check your input values");
      return;
    }
    onConfirm(expenseData);
  };
  const formIsValid =
    values.amount.isValid || values.date.isValid || values.description.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.heading}>{id ? "Edit" : "Add"} Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          invalid={!values.amount.isValid}
          textInputConfig={{
            keyBoardType: "decimal-pad",
            onChangeText: (e) => {
              amountChangeHandler("amount", e);
            },
            value: values.amount.value,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          invalid={!values.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (e) => {
              amountChangeHandler("date", e);
            },
            value: values.date.value,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Description"
        invalid={!values.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: (e) => {
            amountChangeHandler("description", e);
          },
          value: values.description.value,
        }}
      />
      {!formIsValid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data
        </Text>
      )}
      <View style={styles.extraButtons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {id ? "Update" : "Add"}
        </Button>
      </View>
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
  extraButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    minWidth: 150,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: "center",
    color: "red",
    margin: 8,
  },
});
