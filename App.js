import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/LoginStyle";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";
import { authenticate } from "./store/auth";
import * as Progress from "react-native-progress";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated in app", isAuthenticated);
  return (
    <NavigationContainer>
      {!isAuthenticated && <AuthStack />}
      {isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}
const Root = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const gettingToken = async () => {
      try {
        const token = await AsyncStorage.getItem("storedToken");
        console.log("token in app: ", token);
        if (token) {
          dispatch(authenticate(token));
        }
        setLoading(false);
      } catch (err) {
        console.log("err", err);
      }
    };
    gettingToken();
  }, []);

  if (loading) {
    return <Progress.CircleSnail color={["red", "green", "blue"]} />;
  }

  return <Navigation />;
};
export default function App() {
  console.log("process.env", process.env);
  return (
    <Provider store={store}>
      <StatusBar style="light" />

      <Root />
    </Provider>
  );
}
