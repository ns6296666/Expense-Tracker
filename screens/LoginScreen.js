import AuthContent from "../components/Auth/AuthContent";
import { loginUser } from "../components/utils/Auth";
import { useState } from "react";
import { Alert } from "react-native";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function LoginScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function signInHandler({ email, password }) {
    setIsAuthenticated(true);
    try {
      await loginUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in. Please check your credentials or try again later!"
      );
    }
    setIsAuthenticated(false);
  }

  if (isAuthenticated) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
