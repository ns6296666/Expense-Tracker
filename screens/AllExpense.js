import React from "react";
import { Text, View } from "react-native";

export default function AllExpense({ navigation }) {
  const PressHandler = () => {
    console.log("clicked");
    navigation.navigate("ManageExpense");
  };
  return (
    <View>
      <Text>AllExpense</Text>
      <View onPress={PressHandler}>
        <Text>Go to Manage </Text>
      </View>
    </View>
  );
}
