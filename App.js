import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpense from "./screens/AllExpense";
import RecentExpense from "./screens/RecentExpense";
import ManageExpense from "./screens/ManageExpense";
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const BottomTabScreens = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="AllScreen" component={AllExpense} />
      <BottomTabs.Screen name="RecentScreen" component={RecentExpense} />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ExpensesOver" component={BottomTabScreens} />
        <Stack.Screen name="ManageExpense" component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
