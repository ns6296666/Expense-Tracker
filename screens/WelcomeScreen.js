import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpense from "../screens/AllExpense";
import { GlobalStyles } from "../constants/style";
import RecentExpense from "./RecentExpense";
import ManageExpense from "./ManageExpense";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../components/UI/IconButton";
import { logout } from "../store/auth";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const BottomTabScreens = () => {
  const dispatch = useDispatch();
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles?.colors?.primary500 },
        headerTintColor: "#fff",
        tabBarStyle: { backgroundColor: GlobalStyles?.colors?.primary500 },
        tabBarActiveTintColor: GlobalStyles?.colors?.accent500,
        headerRight: ({ tintColor }) => {
          return (
            <View style={styles.buttons}>
              <IconButton
                icon="add"
                size={24}
                color={tintColor}
                onPress={() => {
                  navigation.navigate("ManageExpense");
                }}
              />
              <IconButton
                icon="log-out"
                size={24}
                color={tintColor}
                onPress={() => {
                  dispatch(logout());
                  AsyncStorage.removeItem("storedToken");
                }}
              />
            </View>
          );
        },
      })}
    >
      <BottomTabs.Screen
        name="AllScreen"
        component={AllExpense}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="RecentScreen"
        component={RecentExpense}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function WelcomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles?.colors?.primary500,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="ExpensesScreen"
        component={BottomTabScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{
          headerBackTitle: "Back",
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
    //   </Provider>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
  },
});
