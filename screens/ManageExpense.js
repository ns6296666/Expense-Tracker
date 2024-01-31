import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";

function ManageExpense({ route, navigation }) {
  const id = route?.params?.id;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: id ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, id]);

  return (
    <View>
      <Text>{id ? "Edit Manage Expense" : "Add Manage Expense"}</Text>
    </View>
  );
}

export default ManageExpense;
