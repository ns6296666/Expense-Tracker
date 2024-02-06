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

  const deleteExpenses = () => {
    dispatch(deleteExpense({ id: id }));
    navigation.goBack();
  };

  function cancelHandler() {
    navigation.goBack();
  }

  function ConfirmHandler() {
    if (id) {
      dispatch(
        updateExpense({
          description: "test successfully",
          amount: 29.99,
          date: new Date(24 - 12 - 11),
          id: id,
        })
      );
    } else {
      dispatch(
        addExpense({
          description: "test",
          amount: 19.99,
          date: new Date(24 - 1 - 1),
        })
      );
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpenseForm id={id} />
      <View style={styles.extraButtons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={ConfirmHandler} style={styles.button}>
          {id ? "Update" : "Add"}
        </Button>
      </View>
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
  extraButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    minWidth: 150,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
