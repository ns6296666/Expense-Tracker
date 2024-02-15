import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { addExpense, deleteExpense, updateExpense } from "../store/expense";

function ManageExpense({ route, navigation }) {
  const dispatch = useDispatch();
  const id = route?.params?.id;

  function cancelHandler() {
    navigation.goBack();
  }

  const deleteExpenses = () => {
    dispatch(deleteExpense({ id: id }));
    navigation.goBack();
  };

  function ConfirmHandler(expenseData) {
    if (id) {
      dispatch(updateExpense(expenseData));
    } else {
      dispatch(addExpense(expenseData));
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        id={id}
        onCancel={cancelHandler}
        onConfirm={ConfirmHandler}
      />

      {id && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenses}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
